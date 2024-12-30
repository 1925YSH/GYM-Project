import React from "react";

const WorkoutSessions = () => {
  return (
    <div>
      <section className="workout_session">
        <div className="wrapper">
          <h1>TOP WORKOUT SESSION</h1>
          <p>
            Explore our premium workout sessions designed to help you reach your fitness goals. Whether you're aiming to lose weight, build muscle, or improve your overall health, we have the right programs for you. Our expert trainers are here to guide you every step of the way, ensuring maximum results and motivation.
          </p>
          <img src="/img5.jpg" alt="workout" />
        </div>
        <div className="wrapper">
          <h1>FEATURED BOOTCAMPS</h1>
          <p>
            Join our featured bootcamps to push your limits and take your fitness to the next level. These intense, high-energy training programs focus on strength, endurance, and agility to get you in the best shape of your life. Our bootcamps are designed for all fitness levels, from beginners to advanced athletes.
          </p>
          <div className="bootcamps">
            <div>
              <h4>Strength and Conditioning Bootcamp</h4>
              <p>
                Our Strength and Conditioning Bootcamp is designed to increase your overall strength and stamina. Through a mix of weightlifting, HIIT, and functional exercises, you'll see improvement in your power, endurance, and athletic performance.
              </p>
            </div>
            <div>
              <h4>Cardio Burn Bootcamp</h4>
              <p>
                Burn fat and build endurance with our Cardio Burn Bootcamp. This high-intensity program combines running, cycling, and interval training to help you shed unwanted pounds and increase cardiovascular fitness. Perfect for those looking to lose weight and improve their heart health.
              </p>
            </div>
            <div>
              <h4>Core & Flexibility Bootcamp</h4>
              <p>
                Focus on building a strong core and improving your flexibility with our Core & Flexibility Bootcamp. A mix of yoga, Pilates, and strength training, this program helps with posture, balance, and flexibility while strengthening your abdominal and back muscles.
              </p>
            </div>
            <div>
              <h4>HIIT & Endurance Bootcamp</h4>
              <p>
                Push yourself to the limit with our HIIT & Endurance Bootcamp. This bootcamp focuses on high-intensity interval training to increase endurance, speed, and agility. It's the perfect choice for athletes and those looking to challenge themselves in an intense workout setting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkoutSessions;
