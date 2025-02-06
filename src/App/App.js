
import './App.css';
import React from 'react';
 
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import breadImage from './image (5).jpeg';
import strawberryImage from './image (6).jpeg';
import bananaImage from './image (7).jpeg';
import eggImage from './image (8).jpeg';
 

function Header(){
  return(
    <header className="website-header">
      <div className="logo"></div>
       
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </nav>
    </header>
  )
}

const App = () => {
  const businesses = [
    {
      id: 1,
      name: "Eggs & Co.",
      address: "123 Breakfast Rd",
      city: "Breakfast City",
      state: "NY",
      zipCode: "10001",
      category: "Breakfast",
      rating: 4.5,
      reviewCount: 120,
      imageSrc: eggImage // Replace with actual image URLs
    },
    {
      id: 2,
      name: "Banana Republic",
      address: "456 Fruity Ave",
      city: "Fruit Town",
      state: "CA",
      zipCode: "90210",
      category: "Grocery",
      rating: 4.0,
      reviewCount: 75,
      imageSrc: bananaImage // Replace with actual image URLs
    },
    {
      id: 3,
      name: "Strawberry Fields",
      address: "789 Berry Blvd",
      city: "Berryland",
      state: "FL",
      zipCode: "33101",
      category: "Desserts",
      rating: 4.7,
      reviewCount: 90,
      imageSrc: strawberryImage, // Replace with actual image URLs
    },
    {
      id: 4,
      name: "Bread & Butter",
      address: "101 Loaf St",
      city: "Baker's City",
      state: "TX",
      zipCode: "73301",
      category: "Bakery",
      rating: 4.8,
      reviewCount: 60,
      imageSrc: breadImage, // Replace with actual image URLs
    },
  ];

  return(
    <div>
      <Header />
      <SearchBar />
      <BusinessList businesses={businesses}/>


    </div>
  )
}

export default App; 