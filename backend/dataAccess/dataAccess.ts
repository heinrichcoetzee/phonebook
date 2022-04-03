export class DataAccess {
  generateRandom(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }
  async connect() {
    //Mock service for database connection
    return Promise.resolve('Connected');
  }
}
