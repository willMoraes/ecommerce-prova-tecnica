import menu from './components/Menu';
import State from './lib/State';
import SelectFilter from './components/SelectFilter';
import Pagination from './components/Pagination';
import ProductList from './components/ProductList';

const AppState = new State();
const productsList = new ProductList(AppState);
const productsSelectFilter = new SelectFilter(AppState);
const productsPagination = new Pagination(AppState);

AppState.subscribe(productsList);
AppState.subscribe(productsPagination);
AppState.subscribe(productsSelectFilter);

AppState.update();