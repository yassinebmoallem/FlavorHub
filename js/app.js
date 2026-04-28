
let allRecipes = [];
let activeCategory = 'all';
let currentSearchQuery = '';
let currentPage = 0;
const RECIPES_PER_PAGE = 20;

let userFavorites = (typeof USER_FAVORITES !== 'undefined') ? USER_FAVORITES : [];
const isLoggedIn = (typeof USER_LOGGED_IN !== 'undefined') ? USER_LOGGED_IN : false;

const WEIGHTS = { title: 10, category: 5, ingredients: 3, description: 2, author: 1 };

const SVG_CLOCK_CARD = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  width="13" height="13" fill="currentColor" style="flex-shrink:0;vertical-align:middle;">
  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18
  c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15
  .75-1.23-4.5-2.67V7z"/>
</svg>`;

const SVG_PEOPLE_CARD = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  width="13" height="13" fill="currentColor" style="flex-shrink:0;vertical-align:middle;">
  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3z
  m-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2
  c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05
  1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
</svg>`;

const SVG_SEARCH_EMPTY = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  width="52" height="52" fill="#D1D5DB">
  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0
  9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z
  m-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
</svg>`;

const SVG_HEART = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
  width="16" height="16" fill="currentColor">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
  2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3
  19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>`;



function loadRecipes() {
    try {
        allRecipes = RECIPES_DATA;
        resetAndRender();
    } catch (e) {
        document.getElementById('recipesGrid').innerHTML = '<p>Erreur de chargement des recettes.</p>';
    }
}

function searchRecipes(query) {
    if (!query || !query.trim()) return allRecipes.map(r => ({ recipe: r, score: 0 }));

    const terms = query.toLowerCase().trim().split(/\s+/);
    const scored = allRecipes.map(recipe => {
        let score = 0;
        terms.forEach(term => {
            if (recipe.title && recipe.title.toLowerCase().includes(term)) score += WEIGHTS.title;
            if (recipe.category && recipe.category.toLowerCase().includes(term)) score += WEIGHTS.category;
            if (recipe.ingredients && recipe.ingredients.some(i => i.toLowerCase().includes(term))) score += WEIGHTS.ingredients;
            if (recipe.description && recipe.description.toLowerCase().includes(term)) score += WEIGHTS.description;
            if (recipe.author && recipe.author.toLowerCase().includes(term)) score += WEIGHTS.author;
        });
        if (recipe.title && recipe.title.toLowerCase() === query.toLowerCase()) score += 20;
        return { recipe, score };
    });
    return scored.filter(i => i.score > 0).sort((a, b) => b.score - a.score);
}

function handleSearch(query) {
    currentSearchQuery = query;
    currentPage = 0;
    if (query.trim()) {
        document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
        document.querySelector('.pill:first-child').classList.add('active');
        activeCategory = 'all';
    }
    renderWithSearch();
}

function resetSearch() {
    document.getElementById('searchInput').value = '';
    currentSearchQuery = '';
    resetAndRender();
}



function renderWithSearch() {
    const grid = document.getElementById('recipesGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    let filtered = searchRecipes(currentSearchQuery);
    if (activeCategory !== 'all') {
        filtered = filtered.filter(item => item.recipe.category === activeCategory);
    }

    let recipesToShow = filtered.map(item => item.recipe);

    if (isLoggedIn && userFavorites.length > 0 && !currentSearchQuery.trim()) {
        recipesToShow.sort((a, b) => {
            return (userFavorites.includes(b.id) ? 1 : 0) - (userFavorites.includes(a.id) ? 1 : 0);
        });
    }

    const start = currentPage * RECIPES_PER_PAGE;
    const end = start + RECIPES_PER_PAGE;
    const pageItems = recipesToShow.slice(start, end);

    if (pageItems.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div style="margin-bottom:16px;">${SVG_SEARCH_EMPTY}</div>
                <h3>Aucune recette trouvée</h3>
                <p>Essayez avec d'autres mots-clés.</p>
                <button class="btn btn-primary" onclick="resetSearch()" style="margin-top:16px;">
                    Réinitialiser la recherche
                </button>
            </div>`;
        loadMoreBtn.style.display = 'none';
        return;
    }

    const newHTML = pageItems.map(r => recipeCardHTML(r)).join('');
    if (currentPage === 0) {
        grid.innerHTML = newHTML;
    } else {
        grid.insertAdjacentHTML('beforeend', newHTML);
    }

    loadMoreBtn.style.display = (end < recipesToShow.length) ? 'inline-flex' : 'none';
    currentPage++;
}



function recipeCardHTML(r) {
    const isFav = userFavorites.includes(r.id);
    return `
        <a href="recipe.php?id=${r.id}" class="recipe-card">
            <div class="recipe-card-img">
                <button class="heart-btn${isFav ? ' favori' : ''}"
                        onclick="event.preventDefault();event.stopPropagation();toggleFavorite(${r.id},this)"
                        title="${isFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}">
                    ${SVG_HEART}
                </button>
                <img src="${r.image}" alt="${r.title}" loading="lazy"
                     onerror="this.src='https://via.placeholder.com/400x260?text=No+Image'">
                <div class="recipe-card-badge">${r.category}</div>
            </div>
            <div class="recipe-card-body">
                <div class="recipe-card-meta">
                    <span class="card-meta-item">
                        ${SVG_CLOCK_CARD}
                        ${r.time || '30 min'}
                    </span>
                    <span class="card-meta-item">
                        ${SVG_PEOPLE_CARD}
                        ${r.servings || '4 pers.'}
                    </span>
                </div>
                <div class="recipe-card-title">${r.title}</div>
                <div class="recipe-card-desc">${r.description || ''}</div>
            </div>
        </a>`;
}



function toggleFavorite(recipeId, btn) {
    if (!isLoggedIn) {
        alert('Vous devez être connecté pour ajouter une recette en favori.');
        return;
    }
    fetch('php/toggle-favorite.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'recipe_id=' + recipeId
    })
        .then(r => r.json())
        .then(data => {
            if (data.success) {
                if (data.action === 'added') {
                    btn.classList.add('favori');
                    userFavorites.push(recipeId);
                } else {
                    btn.classList.remove('favori');
                    userFavorites = userFavorites.filter(id => id !== recipeId);
                }
            }
        })
        .catch(err => console.error('Erreur favori:', err));
}

function loadMore() { renderWithSearch(); }

function filterByCategory(category, element) {
    activeCategory = category;
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    element.classList.add('active');
    if (currentSearchQuery) {
        document.getElementById('searchInput').value = '';
        currentSearchQuery = '';
    }
    currentPage = 0;
    renderWithSearch();
}

function resetAndRender() { currentPage = 0; renderWithSearch(); }

loadRecipes();
