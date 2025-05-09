localStorage.clear()
const employees = [
  {
    "id": 1,
    "firstName": "Raj Aryan",
    "email": "e1@e.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "task_title": "Complete the project report",
        "task_description": "Complete the project report",
        "task_date": "2025-03-10",
        "category": "Reporting",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Fix bug in the user login module",
        "task_description": "Fix bug in the user login module",
        "task_date": "2025-03-12",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": false,
        "failed": true
      },
      {
        "task_title": "Attend team meeting",
        "task_description": "Attend team meeting",
        "task_date": "2025-03-15",
        "category": "Meetings",
        "active": true,
        "new_task": true,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Amit",
    "email": "e2@e.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "task_title": "Complete code review for module A",
        "task_description": "Complete code review for module A",
        "task_date": "2025-03-08",
        "category": "Code Review",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Develop user authentication system",
        "task_description": "Develop user authentication system",
        "task_date": "2025-03-10",
        "category": "Development",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Update project documentation",
        "task_description": "Update project documentation",
        "task_date": "2025-03-14",
        "category": "Documentation",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "e3@e.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "task_title": "Implement new API for user registration",
        "task_description": "Implement new API for user registration",
        "task_date": "2025-03-09",
        "category": "API Development",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Optimize database queries",
        "task_description": "Optimize database queries",
        "task_date": "2025-03-11",
        "category": "Optimization",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Resolve frontend layout issues",
        "task_description": "Resolve frontend layout issues",
        "task_date": "2025-03-13",
        "category": "UI/UX",
        "active": false,
        "new_task": true,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Suresh",
    "email": "e4@e.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "task_title": "Set up continuous integration pipeline",
        "task_description": "Set up continuous integration pipeline",
        "task_date": "2025-03-07",
        "category": "DevOps",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Design API documentation",
        "task_description": "Design API documentation",
        "task_date": "2025-03-12",
        "category": "Documentation",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "e5@e.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "task_title": "Create unit tests for authentication module",
        "task_description": "Create unit tests for authentication module",
        "task_date": "2025-03-06",
        "category": "Testing",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Fix styling issues in the dashboard",
        "task_description": "Fix styling issues in the dashboard",
        "task_date": "2025-03-09",
        "category": "UI/UX",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      },
      {
        "task_title": "Review pull requests for feature branch",
        "task_description": "Review pull requests for feature branch",
        "task_date": "2025-03-13",
        "category": "Code Review",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": true
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Arman Malik",
    "email": "admin@me.com",
    "password": "123",
    "task_count": {
      "active": 2,
      "new_task": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "task_title": "Approve employee task completions",
        "task_description": "Approve employee task completions",
        "task_date": "2025-03-10",
        "category": "Management",
        "active": true,
        "new_task": true,
        "completed": false,
        "failed": false
      },
      {
        "task_title": "Oversee project progress",
        "task_description": "Oversee project progress",
        "task_date": "2025-03-12",
        "category": "Management",
        "active": true,
        "new_task": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];



export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};

