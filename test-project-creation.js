// Simple test script to verify project creation works
// Run this with: node test-project-creation.js

const testProjectData = {
  name: "Test Project",
  description: "This is a test project to verify the API works correctly",
  type: "web_development",
  category: "personal",
  priority: "medium",
  targetAudience: "Developers who want to test the API",
  techStack: ["React", "TypeScript", "Node.js"],
  keywords: ["test", "api", "validation"],
  timeline: "1-3-months",
  goals: ["Test the API", "Verify schema validation"],
  challenges: ["Ensure proper validation"],
  resources: {
    budget: "low",
    tools: ["VS Code", "Git"],
    references: ["API documentation"]
  },
  milestones: [
    {
      title: "API Testing",
      description: "Test the project creation endpoint",
      completed: false
    }
  ],
  context: "This is a test project to validate the API endpoint works correctly"
};

async function testProjectCreation() {
  try {
    console.log('Testing project creation...');
    console.log('Test data:', JSON.stringify(testProjectData, null, 2));
    
    const response = await fetch('http://localhost:3000/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testProjectData)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Project created successfully!');
      console.log('Response:', JSON.stringify(result, null, 2));
    } else {
      console.log('❌ Project creation failed');
      console.log('Error:', result);
    }
  } catch (error) {
    console.error('❌ Network error:', error.message);
  }
}

// For now, just log the test data since we can't actually run fetch without a server
console.log('Project creation test data:');
console.log(JSON.stringify(testProjectData, null, 2));
console.log('\nTo test the API, start your Next.js server and run:');
console.log('curl -X POST http://localhost:3000/api/projects \\');
console.log('  -H "Content-Type: application/json" \\');
console.log('  -d \'' + JSON.stringify(testProjectData) + '\'');
