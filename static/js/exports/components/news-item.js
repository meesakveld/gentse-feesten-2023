import { backToRoot } from "../helpers.js"

function generateHTMLForNewsItem(newsItems) {
    return newsItems.map(newsItem => {
        return `
                <article>
                    <a class="news-item" href="${backToRoot()}news.html?id=${newsItem.id}">
                        <div class="relative">
                            <h2>${newsItem.title}</h2>
                            <svg viewBox="0 0 1197 269" aria-hidden="true"><path d="M-0.159,111.093l639.756,0l-85.15,-76.855l29.643,-32.816l144.777,131.216l-143.608,129.655l-30.23,-32.081l84.144,-76.315l-639.756,0l0.424,-42.804Z" fill="#fff"></path></svg>
                        </div>
                        <img loading="lazy" src="${newsItem.picture.large}">
                    </a>
                </article>
            `
    }).join('');
}

export { generateHTMLForNewsItem };