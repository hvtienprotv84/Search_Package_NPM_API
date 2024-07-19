import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import './repositories-list.css';
import './responsive.css';

import src from '../images/search.png';
import RepositoryCard from './RepositoryCard';
import logo from '../images/logo_1.png';

const RepositoriesList: React.FC = () => {
  const { searchRepositories } = useActions();
  const [term, setTerm] = useState('');
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchRepositories(term);
  };

  const Result = () => (
    <div className="repositories">
      {error && <h3>{error}</h3>}
      {loading && <h3 id='loading_search'>Đang Tải Dữ Liệu Tìm Kiếm...</h3>}
      {!error &&
        !loading &&
        data.map((repo) => (
          <div className="repo" key={repo.package.name}>
            <RepositoryCard repo={repo} />
          </div>
        ))}
    </div>
  );

  return (
    <div className="container">
      <div className='container_logo_itme'>
        <a href='/'>
        <img className='logo_itme' src={logo} alt=''/>
        <p>Huỳnh Vĩnh Tiến</p>
        </a>
      </div>
      <div className='container_logo_itme_npm'>
        <a href='/'>
        <p>Search NPM API</p>
        <img className='logo_itme_npm' src='https://seeklogo.com/images/N/npm-logo-01B8642EDD-seeklogo.com.png' alt=''/>
        </a>
      </div>
      <form onSubmit={onSubmit} className="search-bar">
        <input
          name="search-bar"
          type="text"
          placeholder="Vd: React hoặc react-redux hoặc react redux"
          className="input"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>
          <img src={src} alt="" />
        </button>
      </form>
      <Result />
    </div>
  );
};

export default RepositoriesList;
