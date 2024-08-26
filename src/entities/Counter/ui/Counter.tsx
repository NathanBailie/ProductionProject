import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/redesigned/Button';
import { useCounterValue } from '../model/selectors/GetCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const CounterValue = useCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const handleInc = () => increment();
    const handleDec = () => decrement();
    const handleIncSix = () => add(6);

    return (
        <div>
            <h1 data-testid="value-title">{`value = ${CounterValue}`}</h1>
            <Button data-testid="increment-btn" onClick={handleInc}>
                {t('Increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={handleDec}>
                {t('Decrement')}
            </Button>
            <Button data-testid="increment-btn6" onClick={handleIncSix}>
                {t('Add 6')}
            </Button>
        </div>
    );
};
