import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/GetCounterValue/getCounterValue';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const CounterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{`value = ${CounterValue}`}</h1>
            <Button data-testid="increment-btn" onClick={increment}>{t('Increment')}</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>{t('Decrement')}</Button>
        </div>
    );
};
