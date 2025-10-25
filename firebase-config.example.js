// Firebase Configuration Template
// Copy this file to firebase-config.js and update with your Firebase project credentials
// Get these values from: Firebase Console > Project Settings > General > Your apps

export const firebaseConfig = {
    // Your Firebase project's API key
    apiKey: "YOUR_API_KEY_HERE",
    
    // Your Firebase project's auth domain
    // Format: your-project-id.firebaseapp.com
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    
    // Your Firebase project ID
    projectId: "YOUR_PROJECT_ID",
    
    // Your Firebase storage bucket
    // Format: your-project-id.appspot.com
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    
    // Your Firebase messaging sender ID
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    
    // Your Firebase app ID
    appId: "YOUR_APP_ID",
    
    // Optional: Your Firebase measurement ID (for Google Analytics)
    // measurementId: "G-XXXXXXXXXX"
};

// Firestore settings for offline persistence
export const firestoreSettings = {
    // Enable offline persistence
    cacheSizeBytes: 40000000, // 40 MB cache
    
    // Merge strategy for offline changes
    merge: true
};
