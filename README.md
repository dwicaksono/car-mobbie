
![Screenshot 2023-10-23 at 13 35 01](https://github.com/dwicaksono/car-mobbie/assets/20668022/7e624cf5-c4e6-4e98-b315-e1083577368d)


# Cars Mobbie Website

Cars Mobbie is a dynamic website dedicated to car enthusiasts, providing detailed information about various cars. Users can filter cars based on their brand, fuel type, and manufacturing year, making it easy to find the perfect match for their preferences.

## Features

- **Filtering Options:** Users can conveniently filter cars by brand, fuel type, and manufacturing year.
- **API Integration:** The website utilizes a free API from [API Ninjas](https://api-ninjas.com/api/cars) to fetch car data. The endpoint for API requests is `https://api.api-ninjas.com/v1`.
- **Static Images:** All car images are static due to the limitations of the API response, ensuring a consistent user experience.
- **Detailed Information:** Users can view specific details about car features such as fuel type, Front-Wheel Drive (FWD), etc., via popup modals.
- **Technology Stack:** The website is built using Next.js for efficient rendering, Redux Toolkit for state management, Axios for API requests, storybook, and Tailwind CSS for responsive and stylish designs.

Explore the world of cars with Cars Mobbie and find the vehicle that matches your requirements seamlessly!

## Setup the environment

change file
from

```
.env.example
```

to

```
.env
```

## Getting Started

First, run the development server:

```bash
yarn
```

Run with

```bash
yarn dev
```

#### Domain

if you want to see results without running the code you can go to this [LINK](https://cars-mobbie.netlify.app/)

## Storybook

run storybook

```bash
yarn storybook
```

after running open URL on browser

```
 http://localhost:6006/
```
