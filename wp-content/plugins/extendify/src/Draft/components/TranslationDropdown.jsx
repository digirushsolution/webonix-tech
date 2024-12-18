import { Dropdown, MenuItem, MenuGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Icon, language, chevronRight } from '@wordpress/icons';
import { magic } from '@draft/svg';

export const DropdownTranslate = ({
	text,
	closePopup,
	openDraft,
	updatePrompt,
}) => {
	const items = [
		{ language: __('Arabic', 'extendify-local'), code: 'ar' },
		{ language: __('Arabic (Morocco)', 'extendify-local'), code: 'ary' },
		{ language: __('Bulgarian', 'extendify-local'), code: 'bg_BG' },
		{ language: __('Catalan', 'extendify-local'), code: 'ca' },
		{ language: __('Czech', 'extendify-local'), code: 'cs_CZ' },
		{ language: __('Danish', 'extendify-local'), code: 'da_DK' },
		{ language: __('Dutch', 'extendify-local'), code: 'nl_NL' },
		{ language: __('Dutch (Belgium)', 'extendify-local'), code: 'de_BE' },
		{ language: __('English', 'extendify-local'), code: 'en' },
		{ language: __('English (UK)', 'extendify-local'), code: 'en_GB' },
		{ language: __('Estonian', 'extendify-local'), code: 'et' },
		{ language: __('Finnish', 'extendify-local'), code: 'fi' },
		{ language: __('French (Belgium)', 'extendify-local'), code: 'fr_BE' },
		{ language: __('French (Canada)', 'extendify-local'), code: 'fr_CA' },
		{ language: __('French (France)', 'extendify-local'), code: 'fr_FR' },
		{ language: __('German', 'extendify-local'), code: 'de_DE' },
		{ language: __('German (Switzerland)', 'extendify-local'), code: 'de_CH' },
		{ language: __('Greek', 'extendify-local'), code: 'el' },
		{ language: __('Hindi', 'extendify-local'), code: 'hi_IN' },
		{ language: __('Hungarian', 'extendify-local'), code: 'hu_HU' },
		{ language: __('Indonesian', 'extendify-local'), code: 'id_ID' },
		{ language: __('Italian', 'extendify-local'), code: 'it_IT' },
		{ language: __('Japanese', 'extendify-local'), code: 'jp' },
		{ language: __('Norwegian', 'extendify-local'), code: 'nb_NO' },
		{ language: __('Polish', 'extendify-local'), code: 'pl_PL' },
		{ language: __('Portuguese (Brazil)', 'extendify-local'), code: 'pt_BR' },
		{ language: __('Portuguese (Portugal)', 'extendify-local'), code: 'pt_PT' },
		{ language: __('Russian', 'extendify-local'), code: 'ru_RU' },
		{ language: __('Slovak', 'extendify-local'), code: 'sk_SK' },
		{ language: __('Spanish (Spain)', 'extendify-local'), code: 'es_ES' },
		{ language: __('Spanish (Colombia)', 'extendify-local'), code: 'es_CO' },
		{ language: __('Spanish (Mexico)', 'extendify-local'), code: 'es_MX' },
		{ language: __('Swedish', 'extendify-local'), code: 'sv_SE' },
		{ language: __('Turkish', 'extendify-local'), code: 'tr_TR' },
		{ language: __('Ukrainian', 'extendify-local'), code: 'uk' },
		{ language: __('Vietnamese', 'extendify-local'), code: 'vi' },
	];

	return (
		<Dropdown
			className="my-container-class-name flex w-full items-center justify-between"
			contentClassName="my-dropdown-content-classname"
			popoverProps={{ placement: 'right-start' }}
			renderToggle={({ isOpen, onToggle }) => (
				<div className="group flex w-full items-center justify-between hover:text-design-main">
					<MenuItem
						className="flex w-full justify-between"
						icon={language}
						iconPosition="left"
						variant={undefined}
						onClick={onToggle}
						aria-expanded={isOpen}>
						{__('Translate', 'extendify-local')}
					</MenuItem>
					<Icon
						icon={chevronRight}
						size={24}
						className="fill-current group-hover:text-current"
					/>
				</div>
			)}
			renderContent={() => (
				<MenuGroup
					className="extendify-draft"
					label={
						<div className="flex items-center gap-2">
							<Icon className="fill-gray-900" size={16} icon={magic} />
							{__('Translate to...', 'extendify-local')}
						</div>
					}>
					{items.map(
						({
							language,
							code,
							promptType = 'translate',
							systemMessageKey = 'edit',
						}) => (
							<MenuItem
								key={`${promptType}-${code}-${systemMessageKey}`}
								style={{ width: '100%' }}
								isSelected={false}
								disabled={false}
								variant={undefined}
								onClick={() => {
									openDraft?.();
									closePopup?.();
									window.requestAnimationFrame(() =>
										window.requestAnimationFrame(() =>
											updatePrompt({
												text,
												promptType,
												systemMessageKey,
												details: { languageInto: language },
											}),
										),
									);
								}}>
								{language}
							</MenuItem>
						),
					)}
				</MenuGroup>
			)}
		/>
	);
};
