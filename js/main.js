// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
  // Set page title
  document.title = 'EthicAI - Ethical AI-Generated Content';
  
  // Handle product card hover effects
  const productCards = document.querySelectorAll('.product-card');
  
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = 'var(--shadow-md)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });
});