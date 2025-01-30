// Get references to the modal and its components
const tribePopup = document.getElementById('location-tribe-popup');
const closeTribePopup = document.querySelector('.close');
const tribeName = document.getElementById('tribe-name');
const tribeImgPopup = document.getElementById('tribe-img-popup');
const tribeInfo = document.getElementById('tribe-info');
const citizensInfo = document.getElementById('citizens-info');

// Data for each location's tribe and citizens
const locationData = {
  'diamond-tribe-btn': {
    name: "The Diamond Clan",
    imgSrc: "diamond_tribe.jpg",
    description: "The Diamond Clan is a powerful tribe known for its mastery of magic and combat. Their warriors are unmatched in battle, and their spellcasters are capable of manipulating the very elements. The Diamond Clan has stood as a beacon of strength and wisdom for generations. Their cities are adorned with diamonds, and they are led by the great King Thalorian, whose leadership is as unyielding as the precious stones that define their culture. The clan is deeply rooted in tradition, and their influence stretches far across the land.",
    citizens: ["King Thalorian", "Queen Iselith", "Elder Riven"]
  },
  'obsidian-tribe-btn': {
    name: "The Obsidian Tribe",
    imgSrc: "obsidian_tribe.jpg",
    description: "The Obsidian Tribe is fierce and resilient, living in the harsh cold of the Obsidian Empire. Known for their skill in mining, they extract rare and valuable minerals from the depths of their volcanic homeland. The tribe has an ancient code of honor, and their warriors are unmatched in their strength and endurance. They are ruled by Empress Kiera, whose vision has brought the tribe prosperity and power. The Obsidian Tribe is often sought after for their weaponry and crafting expertise, as their creations are prized throughout the land.",
    citizens: ["Empress Kiera", "General Zealot", "High Mage Nareth"]
  },
  'loria-tribe-btn': {
    name: "The Forest Tribes of Loria",
    imgSrc: "loria_tribe.jpg",
    description: "The tribes of Loria are mysterious, living in harmony with nature and the creatures of the forest. They possess an intricate knowledge of the forest's flora and fauna, using their resources wisely and with respect. The shamans of Loria communicate with the spirits of the forest, and the warriors protect their sacred lands fiercely. Life in Loria is deeply spiritual, and their people are known for their profound connection to the natural world. Their greatest leader, Shaman Eldira, is revered as the spiritual heart of the tribe, guiding them through both peaceful times and moments of strife.",
    citizens: ["Shaman Eldira", "Hunter Briar", "Warrior Althor"]
  }
};

// Function to open the modal with the selected tribe and citizens info
const openLocationPopup = (locationKey) => {
  const location = locationData[locationKey];
  // Populate modal with the corresponding data
  tribeName.textContent = location.name;
  tribeImgPopup.src = location.imgSrc;
  tribeInfo.textContent = location.description; // Longer description can now be added
  citizensInfo.innerHTML = location.citizens.join(", ");

  // Display the modal
  tribePopup.style.display = 'flex';
};

// Event listeners for each location button to open the modal with appropriate data
document.getElementById('diamond-tribe-btn').addEventListener('click', () => openLocationPopup('diamond-tribe-btn'));
document.getElementById('obsidian-tribe-btn').addEventListener('click', () => openLocationPopup('obsidian-tribe-btn'));
document.getElementById('loria-tribe-btn').addEventListener('click', () => openLocationPopup('loria-tribe-btn'));

// Event listener to close the modal when the close button is clicked
closeTribePopup.addEventListener('click', () => {
  tribePopup.style.display = 'none';
});

// Event listener to close the modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === tribePopup) {
    tribePopup.style.display = 'none';
  }
});
