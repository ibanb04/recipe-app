export const useRandomDifficultyLevel = () => {
    const difficultyLevels = ["Fácil", "Intermedio", "Difícil"];
    return difficultyLevels[Math.floor(Math.random() * difficultyLevels.length)];
}