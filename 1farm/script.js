document.addEventListener('DOMContentLoaded', () => {
  const showFarmerDashboard = document.getElementById('show-farmer-dashboard');
  const showBuyerDashboard = document.getElementById('show-buyer-dashboard');
  const farmerDashboard = document.getElementById('farmer-dashboard');
  const buyerDashboard = document.getElementById('buyer-dashboard');

  showFarmerDashboard.addEventListener('click', (e) => {
    e.preventDefault();
    farmerDashboard.style.display = 'block';
    buyerDashboard.style.display = 'none';
  });

  showBuyerDashboard.addEventListener('click', (e) => {
    e.preventDefault();
    buyerDashboard.style.display = 'block';
    farmerDashboard.style.display = 'none';
  });
});
