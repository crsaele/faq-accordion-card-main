// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add event listener to each accordion item
accordionItems.forEach((item) => {
  // Get the heading element (h2) inside the accordion item
  const heading = item.querySelector('h2');

  // Add event listener to the heading
  heading.addEventListener('click', () => {
    // Get the paragraph element (p) inside the accordion item
    const paragraph = item.querySelector('p');

    // Toggle the 'active' class on the accordion item
    item.classList.toggle('active');

    // If the accordion item is active, show the paragraph; otherwise, hide it
    if (item.classList.contains('active')) {
      paragraph.style.display = 'block';
    } else {
      paragraph.style.display = 'none';
    }
  });
});