import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }
}

const categoriesService = new CategoriesService();

export default categoriesService;
