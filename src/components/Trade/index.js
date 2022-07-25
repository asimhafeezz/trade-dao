import { TradeLayout } from '../Layout'
import { Swap } from './swap'

const TradeTabs = () => {
	return (
		<section className='tabs'>
			<ul className='tabs-list'>
				<li>
					<a href='#'>Swap</a>
				</li>
				<li>
					<a href='#'>Limit</a>
				</li>
				<li>
					<a href='#'>P2P</a>
				</li>
			</ul>
		</section>
	)
}

export const Trade = () => {
	return (
		<TradeLayout>
			<div className='trade'>
				<TradeTabs />
				<section className='body'>
					<Swap />
				</section>
			</div>
		</TradeLayout>
	)
}
