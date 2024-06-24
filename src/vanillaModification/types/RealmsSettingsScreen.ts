export type RealmsSettingsScreenTypes = "settings_screen" | "generic_section" | "generic_section/$section_content_name" | "generic_section_wrapper" | "generic_section_wrapper/generic_section" | "player_count_label" | "realm_duration_label" | "realm_subscription_origin_label" | "realm_consumable_to_subscription_info_label" | "manage_subscriptions_button" | "delete_realm_button" | "open_realm_button" | "close_realm_button" | "subscriptions_section" | "subscriptions_section/loading_view" | "subscriptions_section/loading_view/loading_failed_view" | "subscriptions_section/loading_view/loading_failed_view/loaded_view" | "label_text" | "branch_grid_item_content" | "branch_grid_item_content/branch_text" | "branch_grid_item_content/branch_text/commit_text" | "matching_item_button_content" | "matching_item_button_content/branch_text" | "matching_item_button_content/branch_text/commit_text" | "branch_item_template" | "branch_item_template/branch_item_button" | "branches_grid" | "branch_set_panel" | "branch_set_panel/set_branch_id_label" | "version_filter_text_box" | "branch_page_panel" | "branch_page_panel/prev_button" | "branch_page_panel/prev_button/page_text" | "branch_page_panel/prev_button/page_text/next_button" | "branches_panel" | "branches_panel/branch_label" | "branches_panel/branch_label/spacing_gap_1" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label/matching_item_button" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label/matching_item_button/spacing_gap_3" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label/matching_item_button/spacing_gap_3/all_commits_label" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label/matching_item_button/spacing_gap_3/all_commits_label/version_filter_text_box" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label/matching_item_button/spacing_gap_3/all_commits_label/version_filter_text_box/branches_grid" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label/matching_item_button/spacing_gap_3/all_commits_label/version_filter_text_box/branches_grid/spacing_gap" | "branches_panel/branch_label/spacing_gap_1/set_branch_version_label/branch_set_panel/spacing_gap_2/matching_version_label/matching_item_button/spacing_gap_3/all_commits_label/version_filter_text_box/branches_grid/spacing_gap/branch_page_panel" | "branch_section" | "branch_section/branches_panel" | "popup_dialog__backups" | "popup_dialog__backups/transparent_close_button" | "popup_dialog__backups/transparent_close_button/backup_restore_popup_content" | "backup_restore_popup_content" | "backup_restore_popup_content/popup_dialog_bg" | "backup_restore_popup_content/popup_dialog_bg/backup_restore_popup_dialog_header" | "backup_restore_popup_content/popup_dialog_bg/backup_restore_popup_dialog_header/backup_restore_popup_dialog_body" | "backup_restore_popup_dialog_header" | "backup_restore_popup_dialog_header/backup_restore_popup_dialog_header_text" | "backup_restore_popup_dialog_header_text" | "backup_restore_popup_dialog_body" | "backup_restore_popup_dialog_body/backup_restore_loading_panel" | "backup_restore_loading_panel" | "backup_restore_loading_panel/backup_restore_loading_stack_panel" | "backup_restore_loading_stack_panel" | "backup_restore_loading_stack_panel/padding" | "backup_restore_loading_stack_panel/padding/backup_restore_text_panel" | "backup_restore_loading_stack_panel/padding/backup_restore_text_panel/backup_restore_loading_bar_panel" | "backup_restore_loading_stack_panel/padding/backup_restore_text_panel/backup_restore_loading_bar_panel/padding2" | "backup_restore_text_panel" | "backup_restore_text_panel/loading_text" | "backup_restore_loading_bar_panel" | "backup_restore_loading_bar_panel/progress_loading_bars" | "backup_replace_icon" | "backup_download_icon" | "backup_grid_item_content" | "backup_grid_item_content/backup_grid_item_icon_panel" | "backup_grid_item_content/backup_grid_item_icon_panel/backup_grid_item_name_and_time_since" | "backup_grid_item_content/backup_grid_item_icon_panel/backup_grid_item_name_and_time_since/backup_grid_item_date_and_time" | "backup_grid_item_content/backup_grid_item_icon_panel/backup_grid_item_name_and_time_since/backup_grid_item_date_and_time/spacing_gap" | "backup_grid_item_name_and_time_since" | "backup_grid_item_name_and_time_since/time_since_text" | "backup_grid_item_name_and_time_since/time_since_text/spacing_gap" | "backup_grid_item_name_and_time_since/time_since_text/spacing_gap/version_text" | "backup_grid_item_date_and_time" | "backup_grid_item_date_and_time/time_text" | "backup_grid_item_date_and_time/time_text/spacing_gap" | "backup_grid_item_date_and_time/time_text/spacing_gap/size_text" | "backup_grid_item_icon_panel" | "backup_grid_item_icon_panel/backup_replace_icon" | "backup_item_template" | "backup_item_template/backup_item_button" | "backup_item_template/backup_item_button/download_backup_panel" | "download_backup_button" | "backup_grid" | "backup_section" | "backup_section/backup_panel" | "backup_info_label" | "backup_network_error_label" | "backup_panel" | "backup_panel/spacing_gap" | "backup_panel/spacing_gap/backup_info_label" | "backup_panel/spacing_gap/backup_info_label/spacing_gap2" | "backup_panel/spacing_gap/backup_info_label/spacing_gap2/progress_panel" | "backup_panel/spacing_gap/backup_info_label/spacing_gap2/progress_panel/backup_grid" | "backup_panel/spacing_gap/backup_info_label/spacing_gap2/progress_panel/backup_grid/backup_network_error_label" | "test_content" | "test_content/realms_allowlist_content_panel" | "test_content/realms_allowlist_content_panel/gamepad_helpers" | "selector_panel" | "selector_panel/play_button" | "selector_panel/play_button/disabled_play_button" | "selector_panel/play_button/disabled_play_button/expired_play_button" | "selector_panel/play_button/disabled_play_button/expired_play_button/padding" | "selector_panel/play_button/disabled_play_button/expired_play_button/padding/selector_group_label" | "selector_panel/play_button/disabled_play_button/expired_play_button/padding/selector_group_label/world_button" | "selector_panel/play_button/disabled_play_button/expired_play_button/padding/selector_group_label/world_button/members_button" | "selector_panel/play_button/disabled_play_button/expired_play_button/padding/selector_group_label/world_button/members_button/subscription_button" | "selector_panel/play_button/disabled_play_button/expired_play_button/padding/selector_group_label/world_button/members_button/subscription_button/backup_button" | "selector_panel/play_button/disabled_play_button/expired_play_button/padding/selector_group_label/world_button/members_button/subscription_button/backup_button/dev_options_button" | "section_content_panels" | "section_content_panels/world_section" | "section_content_panels/world_section/players_section" | "section_content_panels/world_section/players_section/subscription_section" | "section_content_panels/world_section/players_section/subscription_section/dev_options_section" | "section_content_panels/world_section/players_section/subscription_section/dev_options_section/backup_section";