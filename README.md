# Kodisha - Rental Application

## Overview

Kodisha is a rental application built using Next.js v14, designed to provide users with a seamless experience in searching and listing rental properties. The application utilizes Next Auth for authentication, Google Provider for authentication, and MongoDB for database storage. Key features include bookmarking properties, featured properties, rate settings, image uploads, and map integration.

## Features

### User Features

- **Search**: Search for rental properties by location and type of apartment.
- **Bookmark**: Bookmark properties for easy access later.
- **Profile**: View Google account details and listings of own properties.
- **Add Property**: Enter key details and information about the property on rental.

### Property Features

- **Listing**: Display property listings with pagination.
- **Images**: Upload and display property images using Cloudinary.
- **Map**: Integrate a map with a marker using Mapbox and React Geocode.
- **Rate Settings**: Set monthly, weekly, or nightly rates for properties.
- **Featured Properties**: Display featured properties on the featured section.

### Authentication

- **Next Auth**: Utilize Next Auth for authentication.
- **Google Provider**: Use Google Provider for authentication.

### Database

- **MongoDB**: Store data in a MongoDB database.

## Getting Started

### Prerequisites

- Node.js (v16.17.0 or higher)
- Next.js (v14)
- MongoDB (v4.4.3 or higher)
- Cloudinary (account setup required)
- Mapbox (account setup required)

### Installation

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret
   - `MAPBOX_ACCESS_TOKEN`: Your Mapbox access token
4. Run the application: `npm run dev`

## Contributing

Contributions are welcome. Please follow the standard GitHub workflow for submitting pull requests.

## Contact

For any questions or feedback, please reach out to [email](mailto:devs.josia@gmail.com).

This README.md file provides a comprehensive overview of the Kodisha rental application project, including its features, technical requirements, and contribution guidelines.
