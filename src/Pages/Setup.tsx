import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategorySection from '../components/Setup/CategorySection';
import SearchInput from '../components/Setup/SearchInput';
import StartBtn from '../components/Setup/StartBtn';
import NumCardsSection from '../components/Setup/NumCardsSection';
import '../components/Setup/Setup.css';

interface SetupProps {
  gameCategory: string
  setGameCategory: (value: string) => void
  gameCards: string
  setGameCards: (value: string) => void
  handleSearch: () => void
}

const Setup = ({ gameCategory, setGameCategory, gameCards, setGameCards, handleSearch }: SetupProps) => {
  const navigate = useNavigate();

  const [inputVisible, setInputVisible] = useState(false);

  const startGame = () => {
    if (gameCategory && gameCards) {
      handleSearch();
      navigate('/game')
    }
  }

  return (
    <div id="setup" className="page">
      <CategorySection gameCategory={gameCategory} setGameCategory={setGameCategory} setInputVisible={setInputVisible} />
      {inputVisible && <SearchInput setGameCategory={setGameCategory} setInputVisible={setInputVisible} />}
      <NumCardsSection gameCards={gameCards} setGameCards={setGameCards} />
      <div id="setup-info">
        <p className="setup-info-text">
          Category: {gameCategory}
        </p>
        <p className="setup-info-text">
          Number of Cards: {gameCards}
        </p>
      </div>
      <StartBtn startGame={startGame} />
    </div>
  )
}

export default Setup;