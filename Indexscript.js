document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabContents = document.querySelectorAll('.tab-content');

  // Function to switch between tabs
  function switchTab(tabName) {
    tabContents.forEach(content => content.style.display = 'none');
    const activeTab = document.getElementById(tabName);
    if (activeTab) activeTab.style.display = 'block';
  }

  // Event listeners for each tab link
  tabLinks.forEach(tabLink => {
    tabLink.addEventListener('click', function() {
      const tabName = tabLink.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  // Initially show the profile section
  switchTab('profile');

  // Modal functionality (for book details)
  const books = document.querySelectorAll('.book');
  const modal = document.getElementById('book-modal');
  const closeModalBtn = document.getElementById('close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalInfo = document.getElementById('modal-info');

  // Show modal when a book is clicked
  books.forEach(book => {
    book.addEventListener('click', function() {
      const title = this.getAttribute('data-title');
      const info = this.getAttribute('data-info');
      modalTitle.textContent = title;
      modalInfo.innerHTML = info;
      modal.style.display = 'flex'; // Show the modal
    });
  });

  // Close modal functionality
  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
  });

  // Close modal when the close (×) button is clicked
  const closeModalSpan = document.querySelector('.close');
  closeModalSpan.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
  });

  // Toggle dark/light theme
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });
});
