# Wander Wyze Holidays

A professional travel agency website built with React + Vite + Tailwind CSS, designed specifically for Indian families and couples seeking unique travel experiences.

## 🌟 Features

- **Modern Design**: Clean, premium aesthetic with travel-inspired colors (blue, teal, beige)
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Professional Branding**: Consistent Wander Wyze Holidays branding throughout
- **Contact Integration**: Contact forms and WhatsApp integration for customer inquiries

## 🚀 Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── DestinationCard.jsx # Destination cards
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Destinations.jsx # Destinations page
│   ├── Services.jsx    # Services page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9 to #0c4a6e)
- **Teal**: (#14b8a6 to #134e4a)
- **Beige**: (#d9bf8b to #715a3d)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

## 📱 Pages & Sections

### Home Page
- Hero section with full-width travel image
- Featured destinations grid
- Customer testimonials
- Call-to-action sections

### About Page
- Company story and values
- Statistics and achievements
- Team information
- Why choose us section

### Destinations Page
- Grid of popular destinations
- Search and filter functionality
- Destination categories
- Custom itinerary CTA

### Services Page
- Service offerings
- Package pricing
- Service features
- Statistics section

### Contact Page
- Contact form
- Contact information
- WhatsApp integration
- FAQ section

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wanderwyze-holidays
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. The `dist/` folder contains production-ready files
3. Deploy to Netlify by connecting your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`

### Build Settings for Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18.x or higher

## 📋 Customization

### Updating Content
- Edit destination data in `src/pages/Destinations.jsx`
- Update testimonials in `src/pages/Home.jsx`
- Modify contact information in `src/pages/Contact.jsx`

### Styling
- Custom colors in `tailwind.config.js`
- Component styles in `src/index.css`
- Individual component styling in respective files

### Images
- Replace Unsplash image URLs with your own images
- Optimize images for web (recommended: WebP format)
- Update image alt texts for accessibility

## 🔧 Configuration

### Environment Variables
Create a `.env` file for any API keys or configuration:
```env
VITE_API_URL=your_api_url
VITE_WHATSAPP_NUMBER=919876543210
```

### Contact Form
The contact form currently logs data to console. To integrate with a backend:
1. Update the `handleSubmit` function in `src/pages/Contact.jsx`
2. Add your API endpoint
3. Handle form submission to your backend

## 📞 Contact Information

- **Phone**: +91 9833834836
- **Email**: ravi@wanderwyze.com
- **Address**: 255 2nd floor, Aggarwal Plaza, Sector-14, Rohini, Delhi-110085
- **WhatsApp**: [Click to chat](https://wa.me/919833834836)

## 🎯 Target Audience

- **Primary**: Indian families seeking international travel
- **Secondary**: Indian couples planning honeymoons or romantic getaways
- **Tertiary**: Solo travelers and business travelers

## 🌍 Destinations Covered

- Maldives, Kenya, Bali, Dubai, Vietnam, Ladakh
- Thailand, Singapore, Switzerland
- Custom destinations available

## 📄 License

This project is proprietary software for Wander Wyze Holidays.

## 🤝 Contributing

This is a private project for Wander Wyze Holidays. For any issues or suggestions, please contact the development team.

---

**Built with ❤️ for Wander Wyze Holidays**
