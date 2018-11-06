const mockProperties = [
  {
    id: '1', location: 'Location 1', price: 135000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
  {
    id: '2', location: 'Location 2', price: 244000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
  {
    id: '3', location: 'Location 3', price: 275000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
  {
    id: '4', location: 'Location 4', price: 72000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
  {
    id: '5', location: 'Location 5', price: 135000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
  {
    id: '6', location: 'Location 6', price: 135000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
  {
    id: '7', location: 'Location 7', price: 135000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
  {
    id: '8', location: 'Location 8', price: 135000, area: 55, type: 'appartment', bedrooms: 1, bathrooms: 1,
  },
];

const delay = 3000;

function executeWithDelay(func) {
  setTimeout(func, delay);
}

class MockApi {
  static search() {
    return new Promise((resolve) => {
      executeWithDelay(() => resolve(mockProperties));
    });
  }

  static contact() {
    return new Promise((resolve) => {
      executeWithDelay(() => resolve());
    });
  }

  static getOurSelection() {
    return new Promise((resolve) => {
      executeWithDelay(() => resolve(mockProperties));
    });
  }

  static getProperty(id) {
    return new Promise((resolve, reject) => {
      executeWithDelay(() => {
        const filterResult = mockProperties.filter(element => element.id === id);
        if (filterResult.length !== 1) {
          reject(new Error('No property found.'));
        }
        resolve(filterResult[0]);
      });
    });
  }

  static getSimilarProperties() {
    return new Promise((resolve) => {
      executeWithDelay(() => resolve(mockProperties));
    });
  }
}

export default MockApi;
