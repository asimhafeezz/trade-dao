import { BellIcon, HalfMoonIcon } from '../../icons'

//metamask image
import metamaskURL from '../../images/metamask.png'

//top header
export const Header = () => {
	return (
		<div className='header'>
			<section className='header-utils'>
				<BellIcon />
				<HalfMoonIcon />
				<img src={metamaskURL} alt='metamask' width={20} height={20} />
				<p>0.000 ETH</p>
				<section className='address-card'>
					<p>6e5c...4f58</p>
				</section>
			</section>
		</div>
	)
}
