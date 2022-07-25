import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const TradeLayout = ({ children }) => {
	return (
		<div className='trade-layout-main'>
			<Sidebar />
			<main>
				<Header />
				{children}
			</main>
		</div>
	)
}
