/**
 * import react packages
 */
import { useState } from 'react';

/**
 * import next packages
 */
import { GetStaticPropsContext } from 'next';

/**
 * import packages
 */
import { useTranslations } from 'next-intl';

/**
 * import project files
 */
import CardDrawingSimulation from '@components/common/CardDrawingSimulation';
import ComingSoonSection from '@components/common/ComingSoonSection';
import GameRulesModal from '@components/common/GameRulesModal';
import GradientBackground from '@components/common/GradientBackground';
import HomeNavbar from '@components/common/HomeNavbar';
import HomeSection from '@components/common/HomeSection';
import HomeLayout from '@components/layouts/HomeLayout';

const HomePage = () => {
  const translation = useTranslations();
  const [isGameRulesModalOpen, setIsGameRulesModalOpen] = useState(false);

  return (
    <div className="isolate bg-white">
      <GradientBackground />
      <main>
        <HomeNavbar t={translation} isGameRulesModalOpen={isGameRulesModalOpen} setIsGameRulesModalOpen={setIsGameRulesModalOpen} />
        <HomeSection t={translation} />
        <CardDrawingSimulation t={translation} />
        <ComingSoonSection t={translation} />
        <GameRulesModal t={translation} isGameRulesModalOpen={isGameRulesModalOpen} setIsGameRulesModalOpen={setIsGameRulesModalOpen} />
      </main>
    </div>
  )
}

HomePage.layout = HomeLayout;

export default HomePage;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@components/common/messages/${locale}.json`)).default,
    },
  };
}