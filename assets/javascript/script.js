// <!-- GitHub API Integration -->

// Configuration - REPLACE WITH YOUR TOKEN IF NEEDED
const config = {
  githubUsername: "zidan-herlangga",
  // Get your token from: https://github.com/settings/tokens
  // (Create with "public_repo" scope)
  githubToken:
    "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", // Leave empty if you don't need one
  fallbackData: {
    public_repos: 15,
    followers: 4,
    following: 5,
    totalContributions: 387,
  },
};

// Initialize GitHub Calendar
GitHubCalendar("#github-graph", config.githubUsername, {
  responsive: true,
  tooltips: true,
  global_stats: false,
}).then(() => console.log("GitHub Calendar loaded"));

// Enhanced GitHub Stats with Error Handling
async function fetchGitHubStats() {
  try {
    const headers = {};
    if (config.githubToken) {
      headers["Authorization"] = `Bearer ${config.githubToken}`;
    }

    // 1. First try to get data from GitHub API
    const [userResponse, eventsResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${config.githubUsername}`, {
        headers,
      }),
      fetch(
        `https://api.github.com/users/${config.githubUsername}/events/public`,
        { headers }
      ),
    ]);

    // Check if responses are successful
    if (!userResponse.ok) throw new Error("User data request failed");
    if (!eventsResponse.ok) throw new Error("Events data request failed");

    const userData = await userResponse.json();
    const eventsData = await eventsResponse.json();

    // Count contributions from events (fallback if GraphQL fails)
    const contributionsCount = eventsData.length;

    updateStatsUI({
      repos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      contributions: contributionsCount,
      profileUrl: userData.html_url,
      isLiveData: true,
    });
  } catch (error) {
    console.error("GitHub API Error:", error);
    useFallbackData();
  }
}

function updateStatsUI(data) {
  document.getElementById("github-stats").innerHTML = `
        <h3 class="text-xl font-bold mb-4">GitHub Statistics</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center p-4 bg-[var(--bg-primary)] rounded-lg">
            <div class="text-3xl font-bold">${data.repos}</div>
            <div class="text-[var(--text-secondary)]">Repositories</div>
          </div>
          <div class="text-center p-4 bg-[var(--bg-primary)] rounded-lg">
            <div class="text-3xl font-bold">${data.contributions}</div>
            <div class="text-[var(--text-secondary)]">Contributions</div>
          </div>
          <div class="text-center p-4 bg-[var(--bg-primary)] rounded-lg">
            <div class="text-3xl font-bold">${data.followers}</div>
            <div class="text-[var(--text-secondary)]">Followers</div>
          </div>
          <div class="text-center p-4 bg-[var(--bg-primary)] rounded-lg">
            <div class="text-3xl font-bold">${data.following}</div>
            <div class="text-[var(--text-secondary)]">Following</div>
          </div>
        </div>
        <a href="${data.profileUrl}" target="_blank" 
           class="btn mt-4 inline-block w-full text-center py-2 rounded-lg transition">
          View on GitHub
        </a>
        ${
          !data.isLiveData
            ? `
          <p class="text-[var(--yellow)] text-sm mt-2">
            Showing cached data (API limit reached)
          </p>
        `
            : ""
        }
      `;
}

function useFallbackData() {
  updateStatsUI({
    repos: config.fallbackData.public_repos,
    followers: config.fallbackData.followers,
    following: config.fallbackData.following,
    contributions: config.fallbackData.totalContributions,
    profileUrl: `https://github.com/${config.githubUsername}`,
    isLiveData: false,
  });
}

// Initialize with timeout fallback
document.addEventListener("DOMContentLoaded", () => {
  fetchGitHubStats();

  // Fallback if API takes too long to respond
  setTimeout(() => {
    if (
      document.getElementById("github-stats").textContent.includes("Loading")
    ) {
      useFallbackData();
    }
  }, 5000);
});

// <!-- Wordpress Posts Fetch -->
// WordPress Configuration
const wordpressConfig = {
  baseUrl: "https://komunitek.com", // Ganti dengan URL WordPress Anda
  postsEndpoint: "/wp-json/wp/v2/posts",
  perPage: 3,
  authorName: "Zidan Herlangga", // Nama author yang ingin difilter
};

// Fungsi untuk mendapatkan author ID berdasarkan nama
async function getAuthorId() {
  try {
    const response = await fetch(
      `${
        wordpressConfig.baseUrl
      }/wp-json/wp/v2/users?search=${encodeURIComponent(
        wordpressConfig.authorName
      )}`
    );

    if (!response.ok) throw new Error("Gagal memuat data author");

    const authors = await response.json();

    if (authors.length === 0) {
      throw new Error("Author tidak ditemukan");
    }

    return authors[0].id;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// Fungsi untuk memformat tanggal
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}

// Fungsi untuk mengambil berita
async function fetchNews() {
  try {
    // Dapatkan author ID terlebih dahulu
    const authorId = await getAuthorId();

    if (!authorId) {
      throw new Error("Author tidak ditemukan");
    }

    // Fetch posts berdasarkan author ID
    const response = await fetch(
      `${wordpressConfig.baseUrl}${wordpressConfig.postsEndpoint}?per_page=${wordpressConfig.perPage}&author=${authorId}&_embed`
    );

    if (!response.ok) throw new Error("Gagal memuat artikel");

    const posts = await response.json();

    // Jika tidak ada artikel
    if (posts.length === 0) {
      document.getElementById("news-container").innerHTML = `
        <div class="col-span-full text-center text-[var(--text-secondary)]">
          Belum ada artikel yang diterbitkan oleh ${wordpressConfig.authorName}.
        </div>
      `;
      return;
    }

    // Proses data post
    const newsHTML = posts
      .map((post) => {
        const featuredImage =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "https://via.placeholder.com/400x200?text=No+Image";

        return `
        <article class="card rounded-xl p-6 shadow-lg hover:shadow-xl transition">
          <div class="h-40 bg-[var(--bg-primary)] rounded-lg mb-4 overflow-hidden">
            <img 
              src="${featuredImage}" 
              alt="${post.title.rendered}"
              class="w-full h-full object-cover"
              loading="lazy"
            >
          </div>
          <h3 class="text-xl font-bold mb-2">${post.title.rendered}</h3>
          <div class="text-[var(--text-secondary)] mb-4 line-clamp-3">
            ${post.excerpt.rendered
              .replace(/<[^>]*>/g, "")
              .substring(0, 120)}...
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-[var(--accent)]">
              ${formatDate(post.date)}
            </span>
            <a 
              href="${post.link}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn px-4 py-2 text-sm"
            >
              Read More
            </a>
          </div>
        </article>
      `;
      })
      .join("");

    document.getElementById("news-container").innerHTML = newsHTML;
  } catch (error) {
    console.error("Error:", error);
    document.getElementById("news-container").innerHTML = `
      <div class="col-span-full text-center text-[var(--red)]">
        Gagal memuat artikel. Silakan coba kembali nanti.
      </div>
    `;
  }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener("DOMContentLoaded", fetchNews);
