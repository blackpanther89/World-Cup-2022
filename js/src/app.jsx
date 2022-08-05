import { createRoot } from 'react-dom/client';
import WCDraw from './components/WCDraw';

const root = createRoot(document.querySelector('#app'));

root.render(<WCDraw />);
