import { EthCoinIcon, ExchangeCoinIcon, SwapIcon, TetherCoinIcon } from '../../icons'
import { DropDown } from '../../utils'

const TradeInputCard = ({ inputValue, dropDownText, dropDownIcon, heading }) => {
	return (
		<div className='trade-input-card'>
			<section className='inner-header'>
				<h3>{heading}</h3>
				<p>
					Balance:10<span className='color-text'>Max</span>
				</p>
			</section>
			<div className='input-group'>
				<input type='text' value={inputValue} />
				<section className='dropdown-sect'>
					<DropDown
						icon={dropDownIcon}
						text={dropDownText}
						defaultText={defaultSelectText}
						optionsList={countryList}
					/>
				</section>
			</div>
		</div>
	)
}

export const Swap = () => {
	return (
		<div className='swap-section'>
			<section className='header'>
				<section className='heading'>
					<h2>Swap</h2>
					<p className='sub-head'>Trade tokens in an instant</p>
				</section>
				<SwapIcon />
			</section>
			<TradeInputCard
				inputValue={'10.0000'}
				dropDownText={'USDT'}
				dropDownIcon={<TetherCoinIcon />}
				heading={'You Pay'}
			/>
			<section className='icon-button'>
				<ExchangeCoinIcon className='exchange-coins-button-icon' />
			</section>
			<TradeInputCard
				inputValue={'0.0005'}
				dropDownText={'ETH'}
				dropDownIcon={<EthCoinIcon />}
				heading={'You Get'}
			/>
			<section className='exchange-text'>
				<section className='headline'>
					<h3>1 SLAY</h3>
					<h3>2</h3>
				</section>
				<section className='headline'>
					<p>Tx cost 0.092347 =(~24.56)</p>
					<p>~0.00037809(-0.23)</p>
				</section>
				<section className='headline m-top'>
					<h3>1 SLAY</h3>
					<h3>1</h3>
				</section>
				<section className='headline'>
					<p>Tx cost 0.092347 =(~24.56)</p>
					<p>~0.00037809(-0.23)</p>
				</section>
			</section>

			{/* swap button */}
			<button>Swap</button>

			{/* token texts */}
			<section className='token-texts'>
				<section className='headline'>
					<p>
						<small>1 DAI Price</small>
					</p>
					<p>
						<small>1 ETH=28.2932832 DAI (`$2,4567)</small>
					</p>
				</section>
				<section className='headline'>
					<p>
						<small>1 ETH Price</small>
					</p>
					<p>
						<small>Unknown</small>
					</p>
				</section>
			</section>
		</div>
	)
}

const defaultSelectText = 'Please select an option'
const countryList = [
	{ id: 1, name: 'USDT' },
	{ id: 2, name: 'ETH' },
]
