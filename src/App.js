import { Store } from './Store';
import { Container } from './components/Container';
import { QuoteBox } from './components/QuoteBox';
import { CreditBox } from './components/CreditBox';

function App() {
    return (
        <Store>
            <Container>
                <QuoteBox />
                <CreditBox />
            </Container>
        </Store>
    );
}

export default App;
