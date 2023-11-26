import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './AppNavbar';
import AppCard from './AppCard';
import './App.css';
import Text from './text'; 
import White from './white';

function App() {
  return (
    <div className="app-container">
      <div className="background">
        <AppNavbar />
        <White />
        <div className="content-container">
          <Text />
          <div className="white-background">
            <div className="cards-container">
              <AppCard
                title="Basic"
                isSquare={true}
                price="89.99"
                discountedPrice="9.99"
                users="Upto 25 Users"
                storage="Upto 10gb Storage"
                email="Email Support"
                buttonColor="yellow-btn"
                exploreLink="/explore/basic"
              />
             <AppCard
                title="Standard"
                isSquare={true}
                price="189.99"
                discountedPrice="99.99"
                users="Upto 50 Users"
                storage="Upto 60gb Storage"
                email="Email+Chat Support"
                buttonColor="red-btn"
                exploreLink="/explore/basic"
                />
              <AppCard
                title="Premium"
                isSquare={true}
                price="389.99"
                discountedPrice="199.99"
                users="Upto 75 Users"
                storage="Upto 100gb Storage"
                email="Email+Chat+Whatsapp Support"
                buttonColor="violet-btn"
                exploreLink="/explore/basic"
              />
            </div>
          </div>
          <div className="cards-container">
          <AppCard
                title="Free Starter"
                isSquare={false}
                users="Upto 8 Users"
                storage="Upto 3gb Storage"
                email="Email Support"
                buttonColor="green-btn"
                exploreLink="/explore/basic"
            />
            <AppCard
             title="Enterprise Plan"
             isSquare={false}
             users="Upto 75 Users"
             buttonColor="blue-btn"
             exploreLink="/explore/basic"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
