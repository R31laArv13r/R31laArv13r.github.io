document.addEventListener("DOMContentLoaded", () => {
  // Tab functionality
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-content').forEach(content => content.style.display = 'none');
      const contentId = `${tab.dataset.content}-content`;
      document.getElementById(contentId).style.display = 'block';
    });
  });

  // Default tab display
  document.getElementById('life-content').style.display = 'block';

  // Modal functionality for book details
  const modal = document.getElementById('book-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalInfo = document.getElementById('modal-info');
  const closeModal = modal.querySelector('.close');

  document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('click', () => {
      // Get the title and info
      const bookTitle = book.dataset.title;
      const bookInfo = book.dataset.info;
      
      // Set the modal title and info
      modalTitle.textContent = bookTitle;
      modalInfo.innerHTML = bookInfo; // Allow HTML for the link

      // Show the modal
      modal.style.display = 'flex';
    });
  });

  // Close modal functionality
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal if clicking outside of it
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Get the modal and close elements
const modal = document.getElementById("book-modal");
const closeModalButton = document.getElementById("close-modal");
const closeIcon = document.querySelector(".modal .close");

// Open modal when a book is clicked
const books = document.querySelectorAll(".book");
books.forEach(book => {
  book.addEventListener("click", () => {
    const title = book.getAttribute("data-title");
    const info = book.getAttribute("data-info");

    // Set the modal content
    document.getElementById("modal-title").textContent = title;
    document.getElementById("modal-info").innerHTML = info;

    // Show the modal
    modal.style.display = "flex";
  });
});

// Close modal when the close button or icon is clicked
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when the close icon is clicked (span with &times;)
closeIcon.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
