import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './repository-card.css';
import './responsive.css';
interface props {
  repo: {
    package: {
      description: string;
      name: string;
      version: string;
      links: {
        bugs: string;
        homepage: string;
        repository: string;
        npm: string;
      };
    };
    score: {
      detail: { maintenance: number; popularity: number; quality: number };
      final: number;
    };
  };
}

const RepositoryCard: React.FC<props> = ({ repo }) => {
  return (
    <div className="repository-card">
      <div className="repository-card-header">
        <div className="repository-card-title">
          <h2>{repo.package.name}</h2>
          <h3>{repo.package.version}</h3>
        </div>
        <div className="repository-card-scores">
          <div
            className="repository-card-score final"
            data-final-score={`Popularity: ${(
              repo.score.detail.popularity * 100
            ).toFixed(0)}%
            Quality: ${(repo.score.detail.quality * 100).toFixed(0)}%
Maintenance: ${(repo.score.detail.maintenance * 100).toFixed(0)}%`}
          >
            <CircularProgressbar
              value={repo.score.final}
              maxValue={1}
              strokeWidth={10}
              text={`${(repo.score.final * 100).toFixed(0)}`}
              styles={buildStyles({
                textSize: '42px',
                textColor: '#fafafa',
              })}
            />
          </div>
          <div
            className="repository-card-score popularity"
            data-popularity-score={`Popularity: ${(
              repo.score.detail.popularity * 100
            ).toFixed(0)}%
            `}
          >
            <CircularProgressbar
              value={repo.score.detail.popularity}
              maxValue={1}
              strokeWidth={10}
              text="P"
              styles={buildStyles({
                textSize: '42px',
                textColor: '#fafafa',
              })}
            />
          </div>
          <div
            className="repository-card-score quality"
            data-quality-score={`Quality: ${(
              repo.score.detail.quality * 100
            ).toFixed(0)}%
            `}
          >
            <CircularProgressbar
              value={repo.score.detail.quality}
              maxValue={1}
              strokeWidth={10}
              text="Q"
              styles={buildStyles({
                textSize: '42px',
                textColor: '#fafafa',
              })}
            />
          </div>
          <div
            className="repository-card-score maintenance"
            data-maintenance-score={`Maintenance: ${(
              repo.score.detail.maintenance * 100
            ).toFixed(0)}%
            `}
          >
            <CircularProgressbar
              value={repo.score.detail.maintenance}
              maxValue={1}
              strokeWidth={10}
              text="M"
              styles={buildStyles({
                textSize: '42px',
                textColor: '#fafafa',
              })}
            />
          </div>
        </div>
      </div>
      <p>{repo.package.description}</p>
      <div className="links">
        <a href={repo.package.links.homepage}>Homepage</a>
        <a href={repo.package.links.repository}>Repository</a>
        <a href={repo.package.links.npm}>NPM</a>
        <a href={repo.package.links.bugs}>Bugs</a>
      </div>
    </div>
  );
};
export default RepositoryCard;
