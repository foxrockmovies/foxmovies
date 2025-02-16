document.addEventListener('DOMContentLoaded', () => {
    const movies = [
        {
            title: 'Sky Force',
            description: 'India and Pakistan engage in airstrike warfare. The conflict escalates, risking severe consequences. A group of individuals seeks the truth behind the war amid rising tensions.',
            image: 'skyforce.jpg',
            downloadUrl: 'https://vidtube.one/d/u936cpl37x2y_h'
        },
        {
            title: 'Movie 2',
            description: 'Description for Movie 2',
            image: 'movie2.jpg',
            downloadUrl: 'https://example.com/download/movie2'
        },
        {
            title: 'Movie 3',
            description: 'Description for Movie 3',
            image: 'Money.png',
            downloadUrl: 'https://arthrahi.website3.me/'
        },
        {
            title: 'Movie 4',
            description: 'Description for Movie 4',
            image: 'movie4.jpg',
            downloadUrl: 'https://example.com/download/movie4'
        },
        {
            title: 'Movie 5',
            description: 'Description for Movie 5',
            image: 'movie5.jpg',
            downloadUrl: 'https://example.com/download/movie5'
        },
        {
            title: 'Movie 2',
            description: 'Description for Movie 2',
            image: 'movie2.jpg',
            downloadUrl: 'https://example.com/download/movie2'
        },
        {
            title: 'Movie 2',
            description: 'Description for Movie 2',
            image: 'movie2.jpg',
            downloadUrl: 'https://example.com/download/movie2'
        },
        {
            title: 'Movie 2',
            description: 'Description for Movie 2',
            image: 'movie2.jpg',
            downloadUrl: 'https://example.com/download/movie2'
        },
        {
            title: 'Movie 2',
            description: 'Description for Movie 2',
            image: 'movie2.jpg',
            downloadUrl: 'https://example.com/download/movie2'
        }
    ];

    const movieGrid = document.getElementById('movies');

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
                <a href="${movie.downloadUrl}" class="download-button">Download</a>
            </div>
        `;

        movieGrid.appendChild(movieCard);
    });
});