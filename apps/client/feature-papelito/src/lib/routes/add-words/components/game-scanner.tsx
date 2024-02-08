import { QrScanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { PAPELITO_NAMESPACE } from '../../../i18n/constants';

export type GameScannerProps = {
  onGameSessionScanned?: (gameSession: string) => void;
};

export function GameScanner(props: GameScannerProps) {
  const { onGameSessionScanned } = props;
  const [scannedGameSession, setScannedGameSession] = useState<string | null>(
    null
  );
  const { t } = useTranslation(PAPELITO_NAMESPACE);

  function handleScan(result: string) {
    setScannedGameSession(result);
    if (onGameSessionScanned) {
      onGameSessionScanned(result);
    }
  }

  return (
    <div className="flex flex-col p-4 w-full">
      <h1 className="mb-4">{t('Escanea el QR de un juego')}</h1>
      <QrScanner
        viewFinderBorder={50}
        onDecode={handleScan}
        onError={(error) => console.log(error?.message)}
      />
      {scannedGameSession && (
        <span>Scanned game session: {scannedGameSession}</span>
      )}
    </div>
  );
}
