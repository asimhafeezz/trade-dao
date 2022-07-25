import {
	DaoIcon,
	DiscordIcon,
	DollarIcon,
	FiatIcon,
	GithubIcon,
	LogoIcon,
	LotteryIcon,
	MoreDotsIcon,
	PortfolioIcon,
	SidebarButtonIcon,
	TelegramIcon,
	TradeArrowsIcon,
	TwitterIcon,
} from '../../icons'

//sidebar list
const SidebarListItemWithIcon = ({ icon, text, childs }) => {
	return (
		<>
			<li className='sidebar-list-item'>
				<a href='#'>
					{icon && icon}
					<span>{text}</span>
				</a>
			</li>
			{childs &&
				childs.map((child, childIdx) => {
					return (
						<div className='sidebar-list-sub-item'>
							{/* <span className={childIdx === 0 ? 'left-border-line' : ''} /> */}
							{SidebarListItemWithIcon(child)}
						</div>
					)
				})}
		</>
	)
}

export const Sidebar = () => {
	//data list
	const dataList = [
		{
			icon: <PortfolioIcon />,
			text: 'Portfolio',
		},
		{
			icon: <TradeArrowsIcon />,
			text: 'Trade',
			childs: [
				{
					text: 'Swap',
				},
				{
					text: 'Limit',
				},
				{
					text: 'P2P',
				},
			],
		},
		{
			icon: <DollarIcon />,
			text: 'Earn',
		},
		{
			icon: <DaoIcon />,
			text: 'DAO',
		},
		{
			icon: <LotteryIcon />,
			text: 'Lottery',
		},
		{
			icon: <FiatIcon />,
			text: 'Fiat',
		},
		{
			icon: <MoreDotsIcon />,
			text: 'More',
		},
	]

	return (
		<div className='sidebar'>
			<section className='sidebar-top'>
				<LogoIcon className='main-logo' />
				<br />
				<SidebarButtonIcon className='sidebar-button-icon' />
				<section className='sidebar-list'>
					{dataList?.map(item => (
						<SidebarListItemWithIcon
							key={item?.text}
							icon={item?.icon}
							text={item?.text}
							childs={item?.childs}
						/>
					))}
				</section>
			</section>
			{/* sidebar bottom */}
			<div className='sidebar-bottom'>
				<section className='text-box'>
					<h4>Discover, collect, and sell extraordinary NFTs</h4>
					<p>
						<small>
							Enter in this creative world. Discover now the latest NFTs or
							start creating your own!
						</small>
					</p>
					<a href='#'>Invest Now</a>
				</section>
				<hr />
				<section className='social-icons'>
					<GithubIcon />
					<TelegramIcon />
					<DiscordIcon />
					<TwitterIcon />
				</section>
			</div>
		</div>
	)
}
