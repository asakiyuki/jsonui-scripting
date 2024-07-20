import { JsonUIElement } from "../jsonUI/JsonUIElement";
import { JsonUIProperty } from "../jsonUITypes/JsonUIProperty";
import { JsonUIObject } from "./_ScreenCommon";
import * as Types from "./ScreenModifyTypes";
const jsonUIScreen: any = {};

export class Modify {
    private static apply() { };
    private static arguments = '';
    private static bind() { };
    private static call() { };
    private static caller = '';
    private static length = '';
    private static name = '';
    private static toString() { };
   static achievementScreen(element: Types.AchievementScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/achievement_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/achievement_screen.json', extend, properties));
    }
   static addExternalServerScreen(element: Types.AddExternalServerScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/add_external_server_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/add_external_server_screen.json', extend, properties));
    }
   static adhocInprogessScreen(element: Types.AdhocInprogessScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/adhoc_inprogess_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/adhoc_inprogess_screen.json', extend, properties));
    }
   static adhocScreen(element: Types.AdhocScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/adhoc_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/adhoc_screen.json', extend, properties));
    }
   static anvilScreen(element: Types.AnvilScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/anvil_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/anvil_screen.json', extend, properties));
    }
   static anvilScreenPocket(element: Types.AnvilScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/anvil_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/anvil_screen_pocket.json', extend, properties));
    }
   static authenticationModals(element: Types.AuthenticationModals, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/authentication_modals.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/authentication_modals.json', extend, properties));
    }
   static authenticationScreen(element: Types.AuthenticationScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/authentication_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/authentication_screen.json', extend, properties));
    }
   static autoSaveInfoScreen(element: Types.AutoSaveInfoScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/auto_save_info_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/auto_save_info_screen.json', extend, properties));
    }
   static beaconScreen(element: Types.BeaconScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/beacon_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/beacon_screen.json', extend, properties));
    }
   static beaconScreenPocket(element: Types.BeaconScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/beacon_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/beacon_screen_pocket.json', extend, properties));
    }
   static blastFurnaceScreen(element: Types.BlastFurnaceScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/blast_furnace_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/blast_furnace_screen.json', extend, properties));
    }
   static bookScreen(element: Types.BookScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/book_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/book_screen.json', extend, properties));
    }
   static brewingStandScreen(element: Types.BrewingStandScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/brewing_stand_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/brewing_stand_screen.json', extend, properties));
    }
   static brewingStandScreenPocket(element: Types.BrewingStandScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/brewing_stand_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/brewing_stand_screen_pocket.json', extend, properties));
    }
   static bundlePurchaseWarningScreen(element: Types.BundlePurchaseWarningScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/bundle_purchase_warning_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/bundle_purchase_warning_screen.json', extend, properties));
    }
   static cartographyScreen(element: Types.CartographyScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/cartography_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/cartography_screen.json', extend, properties));
    }
   static cartographyScreenPocket(element: Types.CartographyScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/cartography_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/cartography_screen_pocket.json', extend, properties));
    }
   static chalkboardScreen(element: Types.ChalkboardScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/chalkboard_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/chalkboard_screen.json', extend, properties));
    }
   static chatScreen(element: Types.ChatScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/chat_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/chat_screen.json', extend, properties));
    }
   static chatSettingsMenuScreen(element: Types.ChatSettingsMenuScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/chat_settings_menu_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/chat_settings_menu_screen.json', extend, properties));
    }
   static chestScreen(element: Types.ChestScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/chest_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/chest_screen.json', extend, properties));
    }
   static chooseRealmScreen(element: Types.ChooseRealmScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/choose_realm_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/choose_realm_screen.json', extend, properties));
    }
   static cloudUploadScreen(element: Types.CloudUploadScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/cloud_upload_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/cloud_upload_screen.json', extend, properties));
    }
   static coinPurchaseScreen(element: Types.CoinPurchaseScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/coin_purchase_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/coin_purchase_screen.json', extend, properties));
    }
   static commandBlockScreen(element: Types.CommandBlockScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/command_block_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/command_block_screen.json', extend, properties));
    }
   static commentScreen(element: Types.CommentScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/comment_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/comment_screen.json', extend, properties));
    }
   static confirmDeleteAccountScreen(element: Types.ConfirmDeleteAccountScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/confirm_delete_account_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/confirm_delete_account_screen.json', extend, properties));
    }
   static confirmMsaUnlinkScreen(element: Types.ConfirmMsaUnlinkScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/confirm_msa_unlink_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/confirm_msa_unlink_screen.json', extend, properties));
    }
   static contentLog(element: Types.ContentLog, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/content_log.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/content_log.json', extend, properties));
    }
   static contentLogHistoryScreen(element: Types.ContentLogHistoryScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/content_log_history_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/content_log_history_screen.json', extend, properties));
    }
   static convertPurchasesToXblScreen(element: Types.ConvertPurchasesToXblScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/convert_purchases_to_xbl_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/convert_purchases_to_xbl_screen.json', extend, properties));
    }
   static crafterScreenPocket(element: Types.CrafterScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/crafter_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/crafter_screen_pocket.json', extend, properties));
    }
   static createWorldUpsellScreen(element: Types.CreateWorldUpsellScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/create_world_upsell_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/create_world_upsell_screen.json', extend, properties));
    }
   static creditsScreen(element: Types.CreditsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/credits_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/credits_screen.json', extend, properties));
    }
   static csbPurchaseErrorScreen(element: Types.CsbPurchaseErrorScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_purchase_error_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_purchase_error_screen.json', extend, properties));
    }
   static csbScreen(element: Types.CsbScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_screen.json', extend, properties));
    }
   static csbSections_contentSection(element: Types.CsbSections_contentSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/content_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/content_section.json', extend, properties));
    }
   static csbSections_csbBanner(element: Types.CsbSections_csbBanner, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_banner.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_banner.json', extend, properties));
    }
   static csbSections_csbBuyNowScreen(element: Types.CsbSections_csbBuyNowScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_buy_now_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_buy_now_screen.json', extend, properties));
    }
   static csbSections_csbCommon(element: Types.CsbSections_csbCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_common.json', extend, properties));
    }
   static csbSections_csbPurchaseAmazondevicewarningScreen(element: Types.CsbSections_csbPurchaseAmazondevicewarningScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_purchase_amazondevicewarning_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_purchase_amazondevicewarning_screen.json', extend, properties));
    }
   static csbSections_csbPurchaseWarningScreen(element: Types.CsbSections_csbPurchaseWarningScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_purchase_warning_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_purchase_warning_screen.json', extend, properties));
    }
   static csbSections_csbSubscriptionPanel(element: Types.CsbSections_csbSubscriptionPanel, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_subscription_panel.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_subscription_panel.json', extend, properties));
    }
   static csbSections_csbUpsellDialog(element: Types.CsbSections_csbUpsellDialog, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_upsell_dialog.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_upsell_dialog.json', extend, properties));
    }
   static csbSections_csbViewPacksScreen(element: Types.CsbSections_csbViewPacksScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_view_packs_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_view_packs_screen.json', extend, properties));
    }
   static csbSections_csbWelcomeScreen(element: Types.CsbSections_csbWelcomeScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/csb_welcome_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/csb_welcome_screen.json', extend, properties));
    }
   static csbSections_faqSection(element: Types.CsbSections_faqSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/faq_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/faq_section.json', extend, properties));
    }
   static csbSections_landingSection(element: Types.CsbSections_landingSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/csb_sections/landing_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/csb_sections/landing_section.json', extend, properties));
    }
   static customTemplatesScreen(element: Types.CustomTemplatesScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/custom_templates_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/custom_templates_screen.json', extend, properties));
    }
   static dayOneExperienceIntroScreen(element: Types.DayOneExperienceIntroScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/day_one_experience_intro_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/day_one_experience_intro_screen.json', extend, properties));
    }
   static dayOneExperienceScreen(element: Types.DayOneExperienceScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/day_one_experience_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/day_one_experience_screen.json', extend, properties));
    }
   static deathScreen(element: Types.DeathScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/death_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/death_screen.json', extend, properties));
    }
   static debugScreen(element: Types.DebugScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/debug_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/debug_screen.json', extend, properties));
    }
   static devConsoleScreen(element: Types.DevConsoleScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/dev_console_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/dev_console_screen.json', extend, properties));
    }
   static disconnectScreen(element: Types.DisconnectScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/disconnect_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/disconnect_screen.json', extend, properties));
    }
   static displayLoggedErrorScreen(element: Types.DisplayLoggedErrorScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/display_logged_error_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/display_logged_error_screen.json', extend, properties));
    }
   static eduDiscoveryDialog(element: Types.EduDiscoveryDialog, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/edu_discovery_dialog.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/edu_discovery_dialog.json', extend, properties));
    }
   static eduPauseScreenPauseButton(element: Types.EduPauseScreenPauseButton, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/edu_pause_screen_pause_button.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/edu_pause_screen_pause_button.json', extend, properties));
    }
   static emoteWheelScreen(element: Types.EmoteWheelScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/emote_wheel_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/emote_wheel_screen.json', extend, properties));
    }
   static enchantingScreen(element: Types.EnchantingScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/enchanting_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/enchanting_screen.json', extend, properties));
    }
   static enchantingScreenPocket(element: Types.EnchantingScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/enchanting_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/enchanting_screen_pocket.json', extend, properties));
    }
   static encyclopediaScreen(element: Types.EncyclopediaScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/encyclopedia_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/encyclopedia_screen.json', extend, properties));
    }
   static expandedSkinPackScreen(element: Types.ExpandedSkinPackScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/expanded_skin_pack_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/expanded_skin_pack_screen.json', extend, properties));
    }
   static feedCommon(element: Types.FeedCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/feed_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/feed_common.json', extend, properties));
    }
   static feedScreen(element: Types.FeedScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/feed_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/feed_screen.json', extend, properties));
    }
   static fileUploadScreen(element: Types.FileUploadScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/file_upload_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/file_upload_screen.json', extend, properties));
    }
   static furnaceScreen(element: Types.FurnaceScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/furnace_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/furnace_screen.json', extend, properties));
    }
   static furnaceScreenPocket(element: Types.FurnaceScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/furnace_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/furnace_screen_pocket.json', extend, properties));
    }
   static gamepadDisconnected(element: Types.GamepadDisconnected, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/gamepad_disconnected.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/gamepad_disconnected.json', extend, properties));
    }
   static gamepadLayoutScreen(element: Types.GamepadLayoutScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/gamepad_layout_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/gamepad_layout_screen.json', extend, properties));
    }
   static gameTipScreen(element: Types.GameTipScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/game_tip_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/game_tip_screen.json', extend, properties));
    }
   static gatheringInfoScreen(element: Types.GatheringInfoScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/gathering_info_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/gathering_info_screen.json', extend, properties));
    }
   static globalPauseScreen(element: Types.GlobalPauseScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/global_pause_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/global_pause_screen.json', extend, properties));
    }
   static grindstoneScreen(element: Types.GrindstoneScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/grindstone_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/grindstone_screen.json', extend, properties));
    }
   static grindstoneScreenPocket(element: Types.GrindstoneScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/grindstone_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/grindstone_screen_pocket.json', extend, properties));
    }
   static hdrCalibrationScreen(element: Types.HdrCalibrationScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/hdr_calibration_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/hdr_calibration_screen.json', extend, properties));
    }
   static holographicPostrenderScreen(element: Types.HolographicPostrenderScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/holographic_postrender_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/holographic_postrender_screen.json', extend, properties));
    }
   static horseScreen(element: Types.HorseScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/horse_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/horse_screen.json', extend, properties));
    }
   static horseScreenPocket(element: Types.HorseScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/horse_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/horse_screen_pocket.json', extend, properties));
    }
   static hostOptionsScreen(element: Types.HostOptionsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/host_options_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/host_options_screen.json', extend, properties));
    }
   static howToPlayCommon(element: Types.HowToPlayCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/how_to_play_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/how_to_play_common.json', extend, properties));
    }
   static howToPlayScreen(element: Types.HowToPlayScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/how_to_play_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/how_to_play_screen.json', extend, properties));
    }
   static hudScreen(element: Types.HudScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/hud_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/hud_screen.json', extend, properties));
    }
   static immersiveReader(element: Types.ImmersiveReader, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/immersive_reader.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/immersive_reader.json', extend, properties));
    }
   static inventoryScreen(element: Types.InventoryScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/inventory_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/inventory_screen.json', extend, properties));
    }
   static inventoryScreenPocket(element: Types.InventoryScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/inventory_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/inventory_screen_pocket.json', extend, properties));
    }
   static inviteScreen(element: Types.InviteScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/invite_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/invite_screen.json', extend, properties));
    }
   static inBedScreen(element: Types.InBedScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/in_bed_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/in_bed_screen.json', extend, properties));
    }
   static itemDetailDescriptionScreen(element: Types.ItemDetailDescriptionScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/item_detail_description_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/item_detail_description_screen.json', extend, properties));
    }
   static jigsawEditorScreen(element: Types.JigsawEditorScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/jigsaw_editor_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/jigsaw_editor_screen.json', extend, properties));
    }
   static lateJoinPregameScreen(element: Types.LateJoinPregameScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/late_join_pregame_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/late_join_pregame_screen.json', extend, properties));
    }
   static libraryModalScreen(element: Types.LibraryModalScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/library_modal_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/library_modal_screen.json', extend, properties));
    }
   static localWorldPickerScreen(element: Types.LocalWorldPickerScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/local_world_picker_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/local_world_picker_screen.json', extend, properties));
    }
   static loomScreen(element: Types.LoomScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/loom_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/loom_screen.json', extend, properties));
    }
   static loomScreenPocket(element: Types.LoomScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/loom_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/loom_screen_pocket.json', extend, properties));
    }
   static manageFeedScreen(element: Types.ManageFeedScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/manage_feed_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/manage_feed_screen.json', extend, properties));
    }
   static manifestValidationScreen(element: Types.ManifestValidationScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/manifest_validation_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/manifest_validation_screen.json', extend, properties));
    }
   static mobEffectScreen(element: Types.MobEffectScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/mob_effect_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/mob_effect_screen.json', extend, properties));
    }
   static nonXblUserManagementScreen(element: Types.NonXblUserManagementScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/non_xbl_user_management_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/non_xbl_user_management_screen.json', extend, properties));
    }
   static npcInteractScreen(element: Types.NpcInteractScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/npc_interact_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/npc_interact_screen.json', extend, properties));
    }
   static onlineSafetyScreen(element: Types.OnlineSafetyScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/online_safety_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/online_safety_screen.json', extend, properties));
    }
   static packSettingsScreen(element: Types.PackSettingsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/pack_settings_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/pack_settings_screen.json', extend, properties));
    }
   static panoramaScreen(element: Types.PanoramaScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/panorama_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/panorama_screen.json', extend, properties));
    }
   static patchNotesScreen(element: Types.PatchNotesScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/patch_notes_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/patch_notes_screen.json', extend, properties));
    }
   static pauseScreen(element: Types.PauseScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/pause_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/pause_screen.json', extend, properties));
    }
   static pdpScreen(element: Types.PdpScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/pdp_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/pdp_screen.json', extend, properties));
    }
   static pdpScreenshotsSection(element: Types.PdpScreenshotsSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/pdp_screenshots_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/pdp_screenshots_section.json', extend, properties));
    }
   static perfTurtle(element: Types.PerfTurtle, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/perf_turtle.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/perf_turtle.json', extend, properties));
    }
   static permissionsScreen(element: Types.PermissionsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/permissions_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/permissions_screen.json', extend, properties));
    }
   static personaCastCharacterScreen(element: Types.PersonaCastCharacterScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/persona_cast_character_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/persona_cast_character_screen.json', extend, properties));
    }
   static personaCommon(element: Types.PersonaCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/persona_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/persona_common.json', extend, properties));
    }
   static personaScreen(element: Types.PersonaScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/persona_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/persona_screen.json', extend, properties));
    }
   static personaSDL(element: Types.PersonaSDL, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/persona_SDL.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/persona_SDL.json', extend, properties));
    }
   static playScreen(element: Types.PlayScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/play_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/play_screen.json', extend, properties));
    }
   static pocketContainers(element: Types.PocketContainers, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/pocket_containers.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/pocket_containers.json', extend, properties));
    }
   static popupDialog(element: Types.PopupDialog, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/popup_dialog.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/popup_dialog.json', extend, properties));
    }
   static portfolioScreen(element: Types.PortfolioScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/portfolio_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/portfolio_screen.json', extend, properties));
    }
   static postRatingScreen(element: Types.PostRatingScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/post_rating_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/post_rating_screen.json', extend, properties));
    }
   static profileCard(element: Types.ProfileCard, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/profile_card.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/profile_card.json', extend, properties));
    }
   static profileScreen(element: Types.ProfileScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/profile_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/profile_screen.json', extend, properties));
    }
   static progressScreen(element: Types.ProgressScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/progress_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/progress_screen.json', extend, properties));
    }
   static ratingPrompt(element: Types.RatingPrompt, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/rating_prompt.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/rating_prompt.json', extend, properties));
    }
   static realmsPlusScreen(element: Types.RealmsPlusScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsPlus_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsPlus_screen.json', extend, properties));
    }
   static realmsPlusSections_contentSection(element: Types.RealmsPlusSections_contentSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsPlus_sections/content_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsPlus_sections/content_section.json', extend, properties));
    }
   static realmsPlusSections_faqSection(element: Types.RealmsPlusSections_faqSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsPlus_sections/faq_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsPlus_sections/faq_section.json', extend, properties));
    }
   static realmsPlusSections_landingSection(element: Types.RealmsPlusSections_landingSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsPlus_sections/landing_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsPlus_sections/landing_section.json', extend, properties));
    }
   static realmsPlusSections_realmsPlusBuyNowScreen(element: Types.RealmsPlusSections_realmsPlusBuyNowScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsPlus_sections/realmsPlus_buy_now_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsPlus_sections/realmsPlus_buy_now_screen.json', extend, properties));
    }
   static realmsPlusSections_realmsPlusPurchaseWarningScreen(element: Types.RealmsPlusSections_realmsPlusPurchaseWarningScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsPlus_sections/realmsPlus_purchase_warning_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsPlus_sections/realmsPlus_purchase_warning_screen.json', extend, properties));
    }
   static realmsPlusSections_realmsPlusViewPacksScreen(element: Types.RealmsPlusSections_realmsPlusViewPacksScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsPlus_sections/realmsPlus_view_packs_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsPlus_sections/realmsPlus_view_packs_screen.json', extend, properties));
    }
   static realmsplusUpgradeNoticeScreen(element: Types.RealmsplusUpgradeNoticeScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realmsplus_upgrade_notice_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realmsplus_upgrade_notice_screen.json', extend, properties));
    }
   static realmsAllowlist(element: Types.RealmsAllowlist, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realms_allowlist.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realms_allowlist.json', extend, properties));
    }
   static realmsCommon(element: Types.RealmsCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realms_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realms_common.json', extend, properties));
    }
   static realmsCreate(element: Types.RealmsCreate, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realms_create.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realms_create.json', extend, properties));
    }
   static realmsPendingInvitations(element: Types.RealmsPendingInvitations, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realms_pending_invitations.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realms_pending_invitations.json', extend, properties));
    }
   static realmsPlusEndedScreen(element: Types.RealmsPlusEndedScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realms_plus_ended_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realms_plus_ended_screen.json', extend, properties));
    }
   static realmsSettingsScreen(element: Types.RealmsSettingsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realms_settings_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realms_settings_screen.json', extend, properties));
    }
   static realmsSlotsScreen(element: Types.RealmsSlotsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/realms_slots_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/realms_slots_screen.json', extend, properties));
    }
   static redstoneScreen(element: Types.RedstoneScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/redstone_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/redstone_screen.json', extend, properties));
    }
   static resourcePacksScreen(element: Types.ResourcePacksScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/resource_packs_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/resource_packs_screen.json', extend, properties));
    }
   static safeZoneScreen(element: Types.SafeZoneScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/safe_zone_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/safe_zone_screen.json', extend, properties));
    }
   static scoreboards(element: Types.Scoreboards, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/scoreboards.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/scoreboards.json', extend, properties));
    }
   static screenshotPickerScreen(element: Types.ScreenshotPickerScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/screenshot_picker_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/screenshot_picker_screen.json', extend, properties));
    }
   static screenshotScreen(element: Types.ScreenshotScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/screenshot_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/screenshot_screen.json', extend, properties));
    }
   static serverForm(element: Types.ServerForm, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/server_form.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/server_form.json', extend, properties));
    }
   static settingsScreen(element: Types.SettingsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/settings_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/settings_screen.json', extend, properties));
    }
   static settingsSections_controlsSection(element: Types.SettingsSections_controlsSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/settings_sections/controls_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/settings_sections/controls_section.json', extend, properties));
    }
   static settingsSections_generalSection(element: Types.SettingsSections_generalSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/settings_sections/general_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/settings_sections/general_section.json', extend, properties));
    }
   static settingsSections_realmsWorldSection(element: Types.SettingsSections_realmsWorldSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/settings_sections/realms_world_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/settings_sections/realms_world_section.json', extend, properties));
    }
   static settingsSections_settingsCommon(element: Types.SettingsSections_settingsCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/settings_sections/settings_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/settings_sections/settings_common.json', extend, properties));
    }
   static settingsSections_worldSection(element: Types.SettingsSections_worldSection, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/settings_sections/world_section.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/settings_sections/world_section.json', extend, properties));
    }
   static sidebarNavigation(element: Types.SidebarNavigation, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/sidebar_navigation.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/sidebar_navigation.json', extend, properties));
    }
   static signScreen(element: Types.SignScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/sign_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/sign_screen.json', extend, properties));
    }
   static simpleInprogressScreen(element: Types.SimpleInprogressScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/simple_inprogress_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/simple_inprogress_screen.json', extend, properties));
    }
   static skinPackPurchaseScreen(element: Types.SkinPackPurchaseScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/skin_pack_purchase_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/skin_pack_purchase_screen.json', extend, properties));
    }
   static skinPickerScreen(element: Types.SkinPickerScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/skin_picker_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/skin_picker_screen.json', extend, properties));
    }
   static smithingTable2Screen(element: Types.SmithingTable2Screen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/smithing_table_2_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/smithing_table_2_screen.json', extend, properties));
    }
   static smithingTable2ScreenPocket(element: Types.SmithingTable2ScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/smithing_table_2_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/smithing_table_2_screen_pocket.json', extend, properties));
    }
   static smithingTableScreen(element: Types.SmithingTableScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/smithing_table_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/smithing_table_screen.json', extend, properties));
    }
   static smithingTableScreenPocket(element: Types.SmithingTableScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/smithing_table_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/smithing_table_screen_pocket.json', extend, properties));
    }
   static smokerScreen(element: Types.SmokerScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/smoker_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/smoker_screen.json', extend, properties));
    }
   static startScreen(element: Types.StartScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/start_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/start_screen.json', extend, properties));
    }
   static stonecutterScreen(element: Types.StonecutterScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/stonecutter_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/stonecutter_screen.json', extend, properties));
    }
   static stonecutterScreenPocket(element: Types.StonecutterScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/stonecutter_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/stonecutter_screen_pocket.json', extend, properties));
    }
   static storageManagement(element: Types.StorageManagement, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/storage_management.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/storage_management.json', extend, properties));
    }
   static storageManagementPopup(element: Types.StorageManagementPopup, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/storage_management_popup.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/storage_management_popup.json', extend, properties));
    }
   static storageMigrationCommon(element: Types.StorageMigrationCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/storage_migration_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/storage_migration_common.json', extend, properties));
    }
   static storageMigrationGenericScreen(element: Types.StorageMigrationGenericScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/storage_migration_generic_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/storage_migration_generic_screen.json', extend, properties));
    }
   static storeCommon(element: Types.StoreCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_common.json', extend, properties));
    }
   static storeDataDrivenScreen(element: Types.StoreDataDrivenScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_data_driven_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_data_driven_screen.json', extend, properties));
    }
   static storeFilterMenuScreen(element: Types.StoreFilterMenuScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_filter_menu_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_filter_menu_screen.json', extend, properties));
    }
   static storeInventoryScreen(element: Types.StoreInventoryScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_inventory_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_inventory_screen.json', extend, properties));
    }
   static storeItemListScreen(element: Types.StoreItemListScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_item_list_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_item_list_screen.json', extend, properties));
    }
   static storePromoTimelineScreen(element: Types.StorePromoTimelineScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_promo_timeline_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_promo_timeline_screen.json', extend, properties));
    }
   static storeSalesItemListScreen(element: Types.StoreSalesItemListScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_sales_item_list_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_sales_item_list_screen.json', extend, properties));
    }
   static storeSearchScreen(element: Types.StoreSearchScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_search_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_search_screen.json', extend, properties));
    }
   static storeSortMenuScreen(element: Types.StoreSortMenuScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/store_sort_menu_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/store_sort_menu_screen.json', extend, properties));
    }
   static structureEditorScreen(element: Types.StructureEditorScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/structure_editor_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/structure_editor_screen.json', extend, properties));
    }
   static submitFeedbackScreen(element: Types.SubmitFeedbackScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/submit_feedback_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/submit_feedback_screen.json', extend, properties));
    }
   static syncIapsToXblScreen(element: Types.SyncIapsToXblScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/sync_iaps_to_xbl_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/sync_iaps_to_xbl_screen.json', extend, properties));
    }
   static tabbedUpsellScreen(element: Types.TabbedUpsellScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/tabbed_upsell_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/tabbed_upsell_screen.json', extend, properties));
    }
   static testAnimsScreen(element: Types.TestAnimsScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/test_anims_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/test_anims_screen.json', extend, properties));
    }
   static thanksForTestingScreen(element: Types.ThanksForTestingScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/thanks_for_testing_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/thanks_for_testing_screen.json', extend, properties));
    }
   static thirdPartyStoreScreen(element: Types.ThirdPartyStoreScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/third_party_store_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/third_party_store_screen.json', extend, properties));
    }
   static toastScreen(element: Types.ToastScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/toast_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/toast_screen.json', extend, properties));
    }
   static tokenFaqScreen(element: Types.TokenFaqScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/token_faq_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/token_faq_screen.json', extend, properties));
    }
   static trade2Screen(element: Types.Trade2Screen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/trade_2_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/trade_2_screen.json', extend, properties));
    }
   static trade2ScreenPocket(element: Types.Trade2ScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/trade_2_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/trade_2_screen_pocket.json', extend, properties));
    }
   static tradeScreen(element: Types.TradeScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/trade_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/trade_screen.json', extend, properties));
    }
   static tradeScreenPocket(element: Types.TradeScreenPocket, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/trade_screen_pocket.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/trade_screen_pocket.json', extend, properties));
    }
   static trialUpsellScreen(element: Types.TrialUpsellScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/trial_upsell_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/trial_upsell_screen.json', extend, properties));
    }
   static ugcViewerScreen(element: Types.UgcViewerScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ugc_viewer_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ugc_viewer_screen.json', extend, properties));
    }
   static uiArtAssetsCommon(element: Types.UiArtAssetsCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_art_assets_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_art_assets_common.json', extend, properties));
    }
   static uiCommon(element: Types.UiCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_common.json', extend, properties));
    }
   static uiCommonClassic(element: Types.UiCommonClassic, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_common_classic.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_common_classic.json', extend, properties));
    }
   static uiEduCommon(element: Types.UiEduCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_edu_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_edu_common.json', extend, properties));
    }
   static uiHoloCursor(element: Types.UiHoloCursor, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_holo_cursor.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_holo_cursor.json', extend, properties));
    }
   static uiPurchaseCommon(element: Types.UiPurchaseCommon, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_purchase_common.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_purchase_common.json', extend, properties));
    }
   static uiTemplateButtons(element: Types.UiTemplateButtons, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_template_buttons.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_template_buttons.json', extend, properties));
    }
   static uiTemplateDialogs(element: Types.UiTemplateDialogs, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_template_dialogs.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_template_dialogs.json', extend, properties));
    }
   static uiTemplateTabs(element: Types.UiTemplateTabs, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_template_tabs.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_template_tabs.json', extend, properties));
    }
   static uiTemplateToggles(element: Types.UiTemplateToggles, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/ui_template_toggles.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/ui_template_toggles.json', extend, properties));
    }
   static updateDimensions(element: Types.UpdateDimensions, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/update_dimensions.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/update_dimensions.json', extend, properties));
    }
   static updateVersion(element: Types.UpdateVersion, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/update_version.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/update_version.json', extend, properties));
    }
   static win10TrialConversionScreen(element: Types.Win10TrialConversionScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/win10_trial_conversion_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/win10_trial_conversion_screen.json', extend, properties));
    }
   static worldConversionCompleteScreen(element: Types.WorldConversionCompleteScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/world_conversion_complete_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/world_conversion_complete_screen.json', extend, properties));
    }
   static worldRecoveryScreen(element: Types.WorldRecoveryScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/world_recovery_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/world_recovery_screen.json', extend, properties));
    }
   static worldTemplatesScreen(element: Types.WorldTemplatesScreen, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/world_templates_screen.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/world_templates_screen.json', extend, properties));
    }
   static xblConsoleQrSignin(element: Types.XblConsoleQrSignin, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/xbl_console_qr_signin.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/xbl_console_qr_signin.json', extend, properties));
    }
   static xblConsoleSignin(element: Types.XblConsoleSignin, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/xbl_console_signin.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/xbl_console_signin.json', extend, properties));
    }
   static xblConsoleSigninSucceeded(element: Types.XblConsoleSigninSucceeded, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/xbl_console_signin_succeeded.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/xbl_console_signin_succeeded.json', extend, properties));
    }
   static xblFriendFinder(element: Types.XblFriendFinder, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/xbl_friend_finder.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/xbl_friend_finder.json', extend, properties));
    }
   static xblImmediateSignin(element: Types.XblImmediateSignin, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/xbl_immediate_signin.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/xbl_immediate_signin.json', extend, properties));
    }
   static xblOptionalSignin(element: Types.XblOptionalSignin, extend?: string | JsonUIElement, properties?: JsonUIProperty) {
        return <JsonUIObject>((jsonUIScreen['ui/xbl_optional_signin.json'] ??= {})[element] ??= new JsonUIObject(element, 'ui/xbl_optional_signin.json', extend, properties));
    }
}