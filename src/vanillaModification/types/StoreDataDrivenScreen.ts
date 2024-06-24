export type StoreDataDrivenScreenTypes = "today_gift_icon" | "watch" | "today_gift_icon_panel" | "today_gift_icon_panel/wrapped_gift" | "today_gift_icon_panel/wrapped_gift/unwrapped_gift" | "today_gift_icon_panel/wrapped_gift/unwrapped_gift/today_label" | "today_gift_icon_panel/wrapped_gift/unwrapped_gift/today_label/checkbox" | "checkbox_checked" | "checkbox_checked/checkmark" | "promo_checkbox" | "promo_checkbox/checked" | "promo_loading_panel" | "promo_loading_panel/promo_row_progress_loading" | "promo_row_panel" | "promo_row_panel/promo_row_content_stack" | "promo_row_panel/promo_row_content_stack/promo_loading_panel" | "sdl_scrolling_content_stack" | "sdl_scrolling_content_stack/padding_0" | "sdl_scrolling_content_stack/padding_0/store_screen_layout_factory" | "sdl_scrolling_content_stack/padding_0/store_screen_layout_factory/footer" | "sdl_scrolling_section_panel" | "sdl_scrolling_section_panel/padding0" | "sdl_scrolling_section_panel/padding0/side_selection" | "sdl_scrolling_section_panel/padding0/side_selection/padding1" | "sdl_scrolling_section_panel/padding0/side_selection/padding1/sdl_scrolling_section" | "sdl_scrolling_section" | "character_creator_sdl_section_content" | "character_creator_sdl_section_content/color_picker_content_panel" | "character_creator_sdl_section_content/color_picker_content_panel/sdl_scroll_section" | "character_creator_sdl_section" | "character_creator_sdl_section/sdl_section" | "character_creator_panel" | "character_creator_panel/left_main_panel_padding" | "character_creator_panel/left_main_panel_padding/character_creator_sdl_portion" | "character_creator_panel/left_main_panel_padding/character_creator_sdl_portion/middle_main_panel_padding" | "character_creator_panel/left_main_panel_padding/character_creator_sdl_portion/middle_main_panel_padding/right_main_panel" | "character_creator_panel/left_main_panel_padding/character_creator_sdl_portion/middle_main_panel_padding/right_main_panel/right_main_panel_padding" | "character_creator_screen_layout" | "character_creator_screen_layout/expanded_appearance_view" | "character_creator_screen_layout/expanded_appearance_view/character_creator_panel" | "promo_panel_label" | "promo_panel_label/timer_1" | "promo_panel_label/timer_1/padding_0" | "promo_panel_label/timer_1/padding_0/label_panel" | "promo_panel_label/timer_1/padding_0/label_panel/padding_1" | "promo_panel_label/timer_1/padding_0/label_panel/padding_1/timer_2" | "future_promo_image_with_border" | "future_promo_image_with_border/image" | "future_promo_image_with_border/image/date" | "future_promo_image_with_border/image/date/border" | "future_promo_button_panel" | "future_promo_button_panel/future_promo_button" | "past_promo_button_content" | "past_promo_button_content/image" | "past_promo_button_content/image/saturation" | "past_promo_button_content/image/saturation/date" | "past_promo_button_content/image/saturation/date/border" | "past_promo_button" | "past_promo_image_with_border" | "past_promo_image_with_border/button" | "promo_row_with_featured_offer_grid_panel" | "promo_row_with_featured_offer_grid_panel/past_promo_row_grid" | "promo_row_with_featured_offer_grid_panel/past_promo_row_grid/today_promo_offer" | "promo_row_with_featured_offer_grid_panel/past_promo_row_grid/today_promo_offer/future_promo_row_grid" | "promo_row_grid_panel" | "promo_row_grid_panel/past_promo_row_grid" | "promo_row_grid_panel/past_promo_row_grid/future_promo_row_grid" | "main_panel" | "main_panel/background" | "main_panel/background/main_panel_content" | "main_panel/background/main_panel_content/progress_loading" | "nav_button_content" | "nav_button_content/image_panel" | "nav_button_content/image_panel/padding" | "nav_button_content/image_panel/padding/label_panel" | "nav_image_panel" | "nav_image_panel/button_image_panel" | "nav_image_panel/button_image_panel/button_animated_panel" | "nav_button_image_panel" | "nav_button_image_panel/button_image" | "nav_button_image" | "nav_button_animation" | "nav_button_flip_book" | "nav_button_fill" | "nav_button_standard" | "nav_button_standard/nav_button" | "nav_button_grid_panel" | "nav_button_grid_panel/nav_button_grid" | "store_layout_ribbon_search_button" | "store_layout_ribbon_search_button_content" | "store_layout_ribbon_search_button_content/button_image" | "popup_dialog__add_on_common" | "popup_dialog__add_on_common_no_buttons" | "popup_dialog__add_on_common_no_buttons/popup_dialog_bg" | "popup_dialog__add_on_common_no_buttons/popup_dialog_bg/popup_dialog_message" | "popup_dialog__add_on_common_no_buttons/popup_dialog_bg/popup_dialog_message/close_button" | "popup_dialog__add_on_common_no_buttons/popup_dialog_bg/popup_dialog_message/close_button/add_on_popup_content_panel" | "popup_dialog__add_on_common_two_buttons" | "popup_dialog__add_on_common_two_buttons/popup_dialog_bg" | "popup_dialog__add_on_common_two_buttons/popup_dialog_bg/popup_dialog_message" | "popup_dialog__add_on_common_two_buttons/popup_dialog_bg/popup_dialog_message/close_button" | "popup_dialog__add_on_common_two_buttons/popup_dialog_bg/popup_dialog_message/close_button/add_on_popup_content_panel" | "popup_dialog__add_on_common_two_buttons/popup_dialog_bg/popup_dialog_message/close_button/add_on_popup_content_panel/button_copy" | "popup_dialog__add_on_common_two_buttons/popup_dialog_bg/popup_dialog_message/close_button/add_on_popup_content_panel/button_copy/button_continue" | "add_on_button_copy" | "add_on_button_continue" | "add_on_popup_content_panel" | "add_on_popup_content_panel/popup_content" | "popup_dialog__activate_add_on" | "popup_dialog__activate_add_on_select_world" | "popup_dialog__copy_local_world" | "popup_dialog__copy_realms_world" | "copy_local_world_panel" | "copy_local_world_panel/padding_top" | "copy_local_world_panel/padding_top/text_box" | "copy_local_world_panel/padding_top/text_box/padding_middle" | "copy_local_world_panel/padding_top/text_box/padding_middle/text_box2" | "copy_realms_world_panel" | "copy_realms_world_panel/padding_top" | "copy_realms_world_panel/padding_top/text_box" | "copy_realms_world_panel/padding_top/text_box/padding_middle" | "copy_realms_world_panel/padding_top/text_box/padding_middle/text_box2" | "new_or_existing_world_panel" | "new_or_existing_world_panel/padding_left" | "new_or_existing_world_panel/padding_left/world_icon_existing" | "new_or_existing_world_panel/padding_left/world_icon_existing/padding_middle" | "new_or_existing_world_panel/padding_left/world_icon_existing/padding_middle/world_icon_new" | "new_or_existing_world_panel/padding_left/world_icon_existing/padding_middle/world_icon_new/padding_right" | "world_icon_with_button" | "world_icon_with_button/padding_top" | "world_icon_with_button/padding_top/world_icon" | "world_icon_with_button/padding_top/world_icon/button" | "world_icon_with_button/padding_top/world_icon/button/padding_bottom" | "world_icon_new" | "world_icon_new/plus_button" | "world_icon_existing" | "select_world_panel" | "select_world_list" | "select_world_list/realms_world_label" | "select_world_list/realms_world_label/realms_world_list" | "select_world_list/realms_world_label/realms_world_list/padding_middle" | "select_world_list/realms_world_label/realms_world_list/padding_middle/local_world_label" | "select_world_list/realms_world_label/realms_world_list/padding_middle/local_world_label/local_world_list" | "select_world_list/realms_world_label/realms_world_list/padding_middle/local_world_label/local_world_list/padding_end" | "local_world_item_button" | "realms_world_item_button" | "screen_entrance_pop_animation_no_offset" | "store_data_driven_screen_base" | "store_screen_modal_panel" | "store_screen_modal_panel/one_button_dialog" | "store_screen_modal_panel/one_button_dialog/popup_dialog_factory" | "dialog_button" | "store_screen_main_panel" | "store_screen_main_panel/main_content_view" | "store_screen_main_panel/main_content_view/sort_and_filter_modals" | "store_full_screen_content" | "store_full_screen_content/mouse_input_focus_panel" | "store_full_screen_content/mouse_input_focus_panel/main_panel" | "store_full_screen_content/mouse_input_focus_panel/main_panel/popup_dialog_factory" | "store_full_screen_content/mouse_input_focus_panel/main_panel/popup_dialog_factory/character_selector_dialog_factory" | "store_full_screen_content/mouse_input_focus_panel/main_panel/popup_dialog_factory/character_selector_dialog_factory/custom_skin_dialog_factory" | "sdl_base_screen" | "store_data_driven_screen" | "character_creator_screen" | "dressing_room_color_picker_screen" | "expanded_appearance_view_screen" | "non_scrollable_sdl_screen" | "skin_selector_screen" | "store_data_driven_modal_one_button_screen";