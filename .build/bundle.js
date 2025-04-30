/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/CustomerScanner/i18n/i18n.properties":
/*!****************************************************************!*\
  !*** ./build.definitions/CustomerScanner/i18n/i18n.properties ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "CustomerDataSet=CustomerDataSet\nCustomerData_Detail=CustomerData Detail\nCreate_CustomerData_Detail=Create CustomerData Detail\nUpdate_CustomerData_Detail=Update CustomerData Detail"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let customerscanner_actions_application_appupdate_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/AppUpdate.action */ "./build.definitions/CustomerScanner/Actions/Application/AppUpdate.action")
let customerscanner_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/CustomerScanner/Actions/Application/AppUpdateFailureMessage.action")
let customerscanner_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/CustomerScanner/Actions/Application/AppUpdateProgressBanner.action")
let customerscanner_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/CustomerScanner/Actions/Application/AppUpdateSuccessMessage.action")
let customerscanner_actions_application_logout_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/Logout.action */ "./build.definitions/CustomerScanner/Actions/Application/Logout.action")
let customerscanner_actions_application_navtoabout_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/NavToAbout.action */ "./build.definitions/CustomerScanner/Actions/Application/NavToAbout.action")
let customerscanner_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/NavToActivityLog.action */ "./build.definitions/CustomerScanner/Actions/Application/NavToActivityLog.action")
let customerscanner_actions_application_navtosupport_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/NavToSupport.action */ "./build.definitions/CustomerScanner/Actions/Application/NavToSupport.action")
let customerscanner_actions_application_onwillupdate_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/OnWillUpdate.action */ "./build.definitions/CustomerScanner/Actions/Application/OnWillUpdate.action")
let customerscanner_actions_application_reset_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/Reset.action */ "./build.definitions/CustomerScanner/Actions/Application/Reset.action")
let customerscanner_actions_application_resetmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/ResetMessage.action */ "./build.definitions/CustomerScanner/Actions/Application/ResetMessage.action")
let customerscanner_actions_application_usermenupopover_action = __webpack_require__(/*! ./CustomerScanner/Actions/Application/UserMenuPopover.action */ "./build.definitions/CustomerScanner/Actions/Application/UserMenuPopover.action")
let customerscanner_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./CustomerScanner/Actions/CloseModalPage_Cancel.action */ "./build.definitions/CustomerScanner/Actions/CloseModalPage_Cancel.action")
let customerscanner_actions_closemodalpage_complete_action = __webpack_require__(/*! ./CustomerScanner/Actions/CloseModalPage_Complete.action */ "./build.definitions/CustomerScanner/Actions/CloseModalPage_Complete.action")
let customerscanner_actions_closepage_action = __webpack_require__(/*! ./CustomerScanner/Actions/ClosePage.action */ "./build.definitions/CustomerScanner/Actions/ClosePage.action")
let customerscanner_actions_createentityfailuremessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CreateEntityFailureMessage.action */ "./build.definitions/CustomerScanner/Actions/CreateEntityFailureMessage.action")
let customerscanner_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/CustomerScanner/Actions/CreateEntitySuccessMessage.action")
let customerscanner_actions_customerscanner_customerdataset_customerdataset_createentity_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_CreateEntity.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_CreateEntity.action")
let customerscanner_actions_customerscanner_customerdataset_customerdataset_deleteentity_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteEntity.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteEntity.action")
let customerscanner_actions_customerscanner_customerdataset_customerdataset_updateentity_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_UpdateEntity.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_UpdateEntity.action")
let customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_create_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Create.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Create.action")
let customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_detail_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Detail.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Detail.action")
let customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_edit_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Edit.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Edit.action")
let customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_list_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_List.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_List.action")
let customerscanner_actions_customerscanner_scancustomer_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/ScanCustomer.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/ScanCustomer.action")
let customerscanner_actions_customerscanner_service_closeoffline_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/CloseOffline.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOffline.action")
let customerscanner_actions_customerscanner_service_closeofflinefailuremessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineFailureMessage.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineFailureMessage.action")
let customerscanner_actions_customerscanner_service_closeofflinesuccessmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineSuccessMessage.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineSuccessMessage.action")
let customerscanner_actions_customerscanner_service_downloadoffline_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/DownloadOffline.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/DownloadOffline.action")
let customerscanner_actions_customerscanner_service_downloadstartedmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/DownloadStartedMessage.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/DownloadStartedMessage.action")
let customerscanner_actions_customerscanner_service_initializeoffline_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/InitializeOffline.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/InitializeOffline.action")
let customerscanner_actions_customerscanner_service_initializeofflinefailuremessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/InitializeOfflineFailureMessage.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/InitializeOfflineFailureMessage.action")
let customerscanner_actions_customerscanner_service_syncfailuremessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/SyncFailureMessage.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/SyncFailureMessage.action")
let customerscanner_actions_customerscanner_service_syncstartedmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/SyncStartedMessage.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/SyncStartedMessage.action")
let customerscanner_actions_customerscanner_service_uploadoffline_action = __webpack_require__(/*! ./CustomerScanner/Actions/CustomerScanner/Service/UploadOffline.action */ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/UploadOffline.action")
let customerscanner_actions_deleteconfirmation_action = __webpack_require__(/*! ./CustomerScanner/Actions/DeleteConfirmation.action */ "./build.definitions/CustomerScanner/Actions/DeleteConfirmation.action")
let customerscanner_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/CustomerScanner/Actions/DeleteEntityFailureMessage.action")
let customerscanner_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/CustomerScanner/Actions/DeleteEntitySuccessMessage.action")
let customerscanner_actions_errorarchive_errorarchive_syncfailure_action = __webpack_require__(/*! ./CustomerScanner/Actions/ErrorArchive/ErrorArchive_SyncFailure.action */ "./build.definitions/CustomerScanner/Actions/ErrorArchive/ErrorArchive_SyncFailure.action")
let customerscanner_actions_errorarchive_navtoerrorarchive_detail_action = __webpack_require__(/*! ./CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_Detail.action */ "./build.definitions/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_Detail.action")
let customerscanner_actions_errorarchive_navtoerrorarchive_list_action = __webpack_require__(/*! ./CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_List.action */ "./build.definitions/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_List.action")
let customerscanner_actions_genericbannermessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/GenericBannerMessage.action */ "./build.definitions/CustomerScanner/Actions/GenericBannerMessage.action")
let customerscanner_actions_genericmessagebox_action = __webpack_require__(/*! ./CustomerScanner/Actions/GenericMessageBox.action */ "./build.definitions/CustomerScanner/Actions/GenericMessageBox.action")
let customerscanner_actions_genericnavigation_action = __webpack_require__(/*! ./CustomerScanner/Actions/GenericNavigation.action */ "./build.definitions/CustomerScanner/Actions/GenericNavigation.action")
let customerscanner_actions_generictoastmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/GenericToastMessage.action */ "./build.definitions/CustomerScanner/Actions/GenericToastMessage.action")
let customerscanner_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./CustomerScanner/Actions/Logging/LogUploadFailure.action */ "./build.definitions/CustomerScanner/Actions/Logging/LogUploadFailure.action")
let customerscanner_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./CustomerScanner/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/CustomerScanner/Actions/Logging/LogUploadSuccessful.action")
let customerscanner_actions_logging_uploadlog_action = __webpack_require__(/*! ./CustomerScanner/Actions/Logging/UploadLog.action */ "./build.definitions/CustomerScanner/Actions/Logging/UploadLog.action")
let customerscanner_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./CustomerScanner/Actions/Logging/UploadLogProgress.action */ "./build.definitions/CustomerScanner/Actions/Logging/UploadLogProgress.action")
let customerscanner_actions_navigatetodetail_action = __webpack_require__(/*! ./CustomerScanner/Actions/NavigateToDetail.action */ "./build.definitions/CustomerScanner/Actions/NavigateToDetail.action")
let customerscanner_actions_showmessage_noscan_action = __webpack_require__(/*! ./CustomerScanner/Actions/ShowMessage_NoScan.action */ "./build.definitions/CustomerScanner/Actions/ShowMessage_NoScan.action")
let customerscanner_actions_showmessage_notfound_action = __webpack_require__(/*! ./CustomerScanner/Actions/ShowMessage_NotFound.action */ "./build.definitions/CustomerScanner/Actions/ShowMessage_NotFound.action")
let customerscanner_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/CustomerScanner/Actions/UpdateEntityFailureMessage.action")
let customerscanner_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./CustomerScanner/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/CustomerScanner/Actions/UpdateEntitySuccessMessage.action")
let customerscanner_globals_application_appdefinition_version_global = __webpack_require__(/*! ./CustomerScanner/Globals/Application/AppDefinition_Version.global */ "./build.definitions/CustomerScanner/Globals/Application/AppDefinition_Version.global")
let customerscanner_globals_application_applicationname_global = __webpack_require__(/*! ./CustomerScanner/Globals/Application/ApplicationName.global */ "./build.definitions/CustomerScanner/Globals/Application/ApplicationName.global")
let customerscanner_globals_application_supportemail_global = __webpack_require__(/*! ./CustomerScanner/Globals/Application/SupportEmail.global */ "./build.definitions/CustomerScanner/Globals/Application/SupportEmail.global")
let customerscanner_globals_application_supportphone_global = __webpack_require__(/*! ./CustomerScanner/Globals/Application/SupportPhone.global */ "./build.definitions/CustomerScanner/Globals/Application/SupportPhone.global")
let customerscanner_i18n_i18n_properties = __webpack_require__(/*! ./CustomerScanner/i18n/i18n.properties */ "./build.definitions/CustomerScanner/i18n/i18n.properties")
let customerscanner_jsconfig_json = __webpack_require__(/*! ./CustomerScanner/jsconfig.json */ "./build.definitions/CustomerScanner/jsconfig.json")
let customerscanner_pages_application_about_page = __webpack_require__(/*! ./CustomerScanner/Pages/Application/About.page */ "./build.definitions/CustomerScanner/Pages/Application/About.page")
let customerscanner_pages_application_support_page = __webpack_require__(/*! ./CustomerScanner/Pages/Application/Support.page */ "./build.definitions/CustomerScanner/Pages/Application/Support.page")
let customerscanner_pages_application_useractivitylog_page = __webpack_require__(/*! ./CustomerScanner/Pages/Application/UserActivityLog.page */ "./build.definitions/CustomerScanner/Pages/Application/UserActivityLog.page")
let customerscanner_pages_customerscanner_customerdataset_customerdataset_create_page = __webpack_require__(/*! ./CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Create.page */ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Create.page")
let customerscanner_pages_customerscanner_customerdataset_customerdataset_detail_page = __webpack_require__(/*! ./CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Detail.page */ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Detail.page")
let customerscanner_pages_customerscanner_customerdataset_customerdataset_edit_page = __webpack_require__(/*! ./CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Edit.page */ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Edit.page")
let customerscanner_pages_customerscanner_customerdataset_customerdataset_list_page = __webpack_require__(/*! ./CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_List.page */ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_List.page")
let customerscanner_pages_errorarchive_errorarchive_detail_page = __webpack_require__(/*! ./CustomerScanner/Pages/ErrorArchive/ErrorArchive_Detail.page */ "./build.definitions/CustomerScanner/Pages/ErrorArchive/ErrorArchive_Detail.page")
let customerscanner_pages_errorarchive_errorarchive_list_page = __webpack_require__(/*! ./CustomerScanner/Pages/ErrorArchive/ErrorArchive_List.page */ "./build.definitions/CustomerScanner/Pages/ErrorArchive/ErrorArchive_List.page")
let customerscanner_pages_main_page = __webpack_require__(/*! ./CustomerScanner/Pages/Main.page */ "./build.definitions/CustomerScanner/Pages/Main.page")
let customerscanner_rules_application_appupdatefailure_js = __webpack_require__(/*! ./CustomerScanner/Rules/Application/AppUpdateFailure.js */ "./build.definitions/CustomerScanner/Rules/Application/AppUpdateFailure.js")
let customerscanner_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./CustomerScanner/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/CustomerScanner/Rules/Application/AppUpdateSuccess.js")
let customerscanner_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./CustomerScanner/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/CustomerScanner/Rules/Application/ClientIsMultiUserMode.js")
let customerscanner_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./CustomerScanner/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/CustomerScanner/Rules/Application/GetClientSupportVersions.js")
let customerscanner_rules_application_getclientversion_js = __webpack_require__(/*! ./CustomerScanner/Rules/Application/GetClientVersion.js */ "./build.definitions/CustomerScanner/Rules/Application/GetClientVersion.js")
let customerscanner_rules_application_onwillupdate_js = __webpack_require__(/*! ./CustomerScanner/Rules/Application/OnWillUpdate.js */ "./build.definitions/CustomerScanner/Rules/Application/OnWillUpdate.js")
let customerscanner_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./CustomerScanner/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/CustomerScanner/Rules/Application/ResetAppSettingsAndLogout.js")
let customerscanner_rules_clientdata_js = __webpack_require__(/*! ./CustomerScanner/Rules/ClientData.js */ "./build.definitions/CustomerScanner/Rules/ClientData.js")
let customerscanner_rules_customerscanner_customerdataset_customerdataset_deleteconfirmation_js = __webpack_require__(/*! ./CustomerScanner/Rules/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteConfirmation.js */ "./build.definitions/CustomerScanner/Rules/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteConfirmation.js")
let customerscanner_rules_customerscanner_errorarchive_checkforsyncerror_js = __webpack_require__(/*! ./CustomerScanner/Rules/CustomerScanner/ErrorArchive_CheckForSyncError.js */ "./build.definitions/CustomerScanner/Rules/CustomerScanner/ErrorArchive_CheckForSyncError.js")
let customerscanner_rules_getuserrole_js = __webpack_require__(/*! ./CustomerScanner/Rules/GetUserRole.js */ "./build.definitions/CustomerScanner/Rules/GetUserRole.js")
let customerscanner_rules_logging_loglevels_js = __webpack_require__(/*! ./CustomerScanner/Rules/Logging/LogLevels.js */ "./build.definitions/CustomerScanner/Rules/Logging/LogLevels.js")
let customerscanner_rules_logging_settracecategories_js = __webpack_require__(/*! ./CustomerScanner/Rules/Logging/SetTraceCategories.js */ "./build.definitions/CustomerScanner/Rules/Logging/SetTraceCategories.js")
let customerscanner_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./CustomerScanner/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/CustomerScanner/Rules/Logging/SetUserLogLevel.js")
let customerscanner_rules_logging_togglelogging_js = __webpack_require__(/*! ./CustomerScanner/Rules/Logging/ToggleLogging.js */ "./build.definitions/CustomerScanner/Rules/Logging/ToggleLogging.js")
let customerscanner_rules_logging_tracecategories_js = __webpack_require__(/*! ./CustomerScanner/Rules/Logging/TraceCategories.js */ "./build.definitions/CustomerScanner/Rules/Logging/TraceCategories.js")
let customerscanner_rules_logging_userlogsetting_js = __webpack_require__(/*! ./CustomerScanner/Rules/Logging/UserLogSetting.js */ "./build.definitions/CustomerScanner/Rules/Logging/UserLogSetting.js")
let customerscanner_rules_navigatetocustomerdetail_js = __webpack_require__(/*! ./CustomerScanner/Rules/NavigateToCustomerDetail.js */ "./build.definitions/CustomerScanner/Rules/NavigateToCustomerDetail.js")
let customerscanner_rules_service_initialize_js = __webpack_require__(/*! ./CustomerScanner/Rules/Service/Initialize.js */ "./build.definitions/CustomerScanner/Rules/Service/Initialize.js")
let customerscanner_services_customerscanner_service = __webpack_require__(/*! ./CustomerScanner/Services/CustomerScanner.service */ "./build.definitions/CustomerScanner/Services/CustomerScanner.service")
let customerscanner_styles_styles_css = __webpack_require__(/*! ./CustomerScanner/Styles/Styles.css */ "./build.definitions/CustomerScanner/Styles/Styles.css")
let customerscanner_styles_styles_less = __webpack_require__(/*! ./CustomerScanner/Styles/Styles.less */ "./build.definitions/CustomerScanner/Styles/Styles.less")
let customerscanner_styles_styles_light_css = __webpack_require__(/*! ./CustomerScanner/Styles/Styles.light.css */ "./build.definitions/CustomerScanner/Styles/Styles.light.css")
let customerscanner_styles_styles_light_json = __webpack_require__(/*! ./CustomerScanner/Styles/Styles.light.json */ "./build.definitions/CustomerScanner/Styles/Styles.light.json")
let customerscanner_styles_styles_light_nss = __webpack_require__(/*! ./CustomerScanner/Styles/Styles.light.nss */ "./build.definitions/CustomerScanner/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	customerscanner_actions_application_appupdate_action : customerscanner_actions_application_appupdate_action,
	customerscanner_actions_application_appupdatefailuremessage_action : customerscanner_actions_application_appupdatefailuremessage_action,
	customerscanner_actions_application_appupdateprogressbanner_action : customerscanner_actions_application_appupdateprogressbanner_action,
	customerscanner_actions_application_appupdatesuccessmessage_action : customerscanner_actions_application_appupdatesuccessmessage_action,
	customerscanner_actions_application_logout_action : customerscanner_actions_application_logout_action,
	customerscanner_actions_application_navtoabout_action : customerscanner_actions_application_navtoabout_action,
	customerscanner_actions_application_navtoactivitylog_action : customerscanner_actions_application_navtoactivitylog_action,
	customerscanner_actions_application_navtosupport_action : customerscanner_actions_application_navtosupport_action,
	customerscanner_actions_application_onwillupdate_action : customerscanner_actions_application_onwillupdate_action,
	customerscanner_actions_application_reset_action : customerscanner_actions_application_reset_action,
	customerscanner_actions_application_resetmessage_action : customerscanner_actions_application_resetmessage_action,
	customerscanner_actions_application_usermenupopover_action : customerscanner_actions_application_usermenupopover_action,
	customerscanner_actions_closemodalpage_cancel_action : customerscanner_actions_closemodalpage_cancel_action,
	customerscanner_actions_closemodalpage_complete_action : customerscanner_actions_closemodalpage_complete_action,
	customerscanner_actions_closepage_action : customerscanner_actions_closepage_action,
	customerscanner_actions_createentityfailuremessage_action : customerscanner_actions_createentityfailuremessage_action,
	customerscanner_actions_createentitysuccessmessage_action : customerscanner_actions_createentitysuccessmessage_action,
	customerscanner_actions_customerscanner_customerdataset_customerdataset_createentity_action : customerscanner_actions_customerscanner_customerdataset_customerdataset_createentity_action,
	customerscanner_actions_customerscanner_customerdataset_customerdataset_deleteentity_action : customerscanner_actions_customerscanner_customerdataset_customerdataset_deleteentity_action,
	customerscanner_actions_customerscanner_customerdataset_customerdataset_updateentity_action : customerscanner_actions_customerscanner_customerdataset_customerdataset_updateentity_action,
	customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_create_action : customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_create_action,
	customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_detail_action : customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_detail_action,
	customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_edit_action : customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_edit_action,
	customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_list_action : customerscanner_actions_customerscanner_customerdataset_navtocustomerdataset_list_action,
	customerscanner_actions_customerscanner_scancustomer_action : customerscanner_actions_customerscanner_scancustomer_action,
	customerscanner_actions_customerscanner_service_closeoffline_action : customerscanner_actions_customerscanner_service_closeoffline_action,
	customerscanner_actions_customerscanner_service_closeofflinefailuremessage_action : customerscanner_actions_customerscanner_service_closeofflinefailuremessage_action,
	customerscanner_actions_customerscanner_service_closeofflinesuccessmessage_action : customerscanner_actions_customerscanner_service_closeofflinesuccessmessage_action,
	customerscanner_actions_customerscanner_service_downloadoffline_action : customerscanner_actions_customerscanner_service_downloadoffline_action,
	customerscanner_actions_customerscanner_service_downloadstartedmessage_action : customerscanner_actions_customerscanner_service_downloadstartedmessage_action,
	customerscanner_actions_customerscanner_service_initializeoffline_action : customerscanner_actions_customerscanner_service_initializeoffline_action,
	customerscanner_actions_customerscanner_service_initializeofflinefailuremessage_action : customerscanner_actions_customerscanner_service_initializeofflinefailuremessage_action,
	customerscanner_actions_customerscanner_service_syncfailuremessage_action : customerscanner_actions_customerscanner_service_syncfailuremessage_action,
	customerscanner_actions_customerscanner_service_syncstartedmessage_action : customerscanner_actions_customerscanner_service_syncstartedmessage_action,
	customerscanner_actions_customerscanner_service_uploadoffline_action : customerscanner_actions_customerscanner_service_uploadoffline_action,
	customerscanner_actions_deleteconfirmation_action : customerscanner_actions_deleteconfirmation_action,
	customerscanner_actions_deleteentityfailuremessage_action : customerscanner_actions_deleteentityfailuremessage_action,
	customerscanner_actions_deleteentitysuccessmessage_action : customerscanner_actions_deleteentitysuccessmessage_action,
	customerscanner_actions_errorarchive_errorarchive_syncfailure_action : customerscanner_actions_errorarchive_errorarchive_syncfailure_action,
	customerscanner_actions_errorarchive_navtoerrorarchive_detail_action : customerscanner_actions_errorarchive_navtoerrorarchive_detail_action,
	customerscanner_actions_errorarchive_navtoerrorarchive_list_action : customerscanner_actions_errorarchive_navtoerrorarchive_list_action,
	customerscanner_actions_genericbannermessage_action : customerscanner_actions_genericbannermessage_action,
	customerscanner_actions_genericmessagebox_action : customerscanner_actions_genericmessagebox_action,
	customerscanner_actions_genericnavigation_action : customerscanner_actions_genericnavigation_action,
	customerscanner_actions_generictoastmessage_action : customerscanner_actions_generictoastmessage_action,
	customerscanner_actions_logging_loguploadfailure_action : customerscanner_actions_logging_loguploadfailure_action,
	customerscanner_actions_logging_loguploadsuccessful_action : customerscanner_actions_logging_loguploadsuccessful_action,
	customerscanner_actions_logging_uploadlog_action : customerscanner_actions_logging_uploadlog_action,
	customerscanner_actions_logging_uploadlogprogress_action : customerscanner_actions_logging_uploadlogprogress_action,
	customerscanner_actions_navigatetodetail_action : customerscanner_actions_navigatetodetail_action,
	customerscanner_actions_showmessage_noscan_action : customerscanner_actions_showmessage_noscan_action,
	customerscanner_actions_showmessage_notfound_action : customerscanner_actions_showmessage_notfound_action,
	customerscanner_actions_updateentityfailuremessage_action : customerscanner_actions_updateentityfailuremessage_action,
	customerscanner_actions_updateentitysuccessmessage_action : customerscanner_actions_updateentitysuccessmessage_action,
	customerscanner_globals_application_appdefinition_version_global : customerscanner_globals_application_appdefinition_version_global,
	customerscanner_globals_application_applicationname_global : customerscanner_globals_application_applicationname_global,
	customerscanner_globals_application_supportemail_global : customerscanner_globals_application_supportemail_global,
	customerscanner_globals_application_supportphone_global : customerscanner_globals_application_supportphone_global,
	customerscanner_i18n_i18n_properties : customerscanner_i18n_i18n_properties,
	customerscanner_jsconfig_json : customerscanner_jsconfig_json,
	customerscanner_pages_application_about_page : customerscanner_pages_application_about_page,
	customerscanner_pages_application_support_page : customerscanner_pages_application_support_page,
	customerscanner_pages_application_useractivitylog_page : customerscanner_pages_application_useractivitylog_page,
	customerscanner_pages_customerscanner_customerdataset_customerdataset_create_page : customerscanner_pages_customerscanner_customerdataset_customerdataset_create_page,
	customerscanner_pages_customerscanner_customerdataset_customerdataset_detail_page : customerscanner_pages_customerscanner_customerdataset_customerdataset_detail_page,
	customerscanner_pages_customerscanner_customerdataset_customerdataset_edit_page : customerscanner_pages_customerscanner_customerdataset_customerdataset_edit_page,
	customerscanner_pages_customerscanner_customerdataset_customerdataset_list_page : customerscanner_pages_customerscanner_customerdataset_customerdataset_list_page,
	customerscanner_pages_errorarchive_errorarchive_detail_page : customerscanner_pages_errorarchive_errorarchive_detail_page,
	customerscanner_pages_errorarchive_errorarchive_list_page : customerscanner_pages_errorarchive_errorarchive_list_page,
	customerscanner_pages_main_page : customerscanner_pages_main_page,
	customerscanner_rules_application_appupdatefailure_js : customerscanner_rules_application_appupdatefailure_js,
	customerscanner_rules_application_appupdatesuccess_js : customerscanner_rules_application_appupdatesuccess_js,
	customerscanner_rules_application_clientismultiusermode_js : customerscanner_rules_application_clientismultiusermode_js,
	customerscanner_rules_application_getclientsupportversions_js : customerscanner_rules_application_getclientsupportversions_js,
	customerscanner_rules_application_getclientversion_js : customerscanner_rules_application_getclientversion_js,
	customerscanner_rules_application_onwillupdate_js : customerscanner_rules_application_onwillupdate_js,
	customerscanner_rules_application_resetappsettingsandlogout_js : customerscanner_rules_application_resetappsettingsandlogout_js,
	customerscanner_rules_clientdata_js : customerscanner_rules_clientdata_js,
	customerscanner_rules_customerscanner_customerdataset_customerdataset_deleteconfirmation_js : customerscanner_rules_customerscanner_customerdataset_customerdataset_deleteconfirmation_js,
	customerscanner_rules_customerscanner_errorarchive_checkforsyncerror_js : customerscanner_rules_customerscanner_errorarchive_checkforsyncerror_js,
	customerscanner_rules_getuserrole_js : customerscanner_rules_getuserrole_js,
	customerscanner_rules_logging_loglevels_js : customerscanner_rules_logging_loglevels_js,
	customerscanner_rules_logging_settracecategories_js : customerscanner_rules_logging_settracecategories_js,
	customerscanner_rules_logging_setuserloglevel_js : customerscanner_rules_logging_setuserloglevel_js,
	customerscanner_rules_logging_togglelogging_js : customerscanner_rules_logging_togglelogging_js,
	customerscanner_rules_logging_tracecategories_js : customerscanner_rules_logging_tracecategories_js,
	customerscanner_rules_logging_userlogsetting_js : customerscanner_rules_logging_userlogsetting_js,
	customerscanner_rules_navigatetocustomerdetail_js : customerscanner_rules_navigatetocustomerdetail_js,
	customerscanner_rules_service_initialize_js : customerscanner_rules_service_initialize_js,
	customerscanner_services_customerscanner_service : customerscanner_services_customerscanner_service,
	customerscanner_styles_styles_css : customerscanner_styles_styles_css,
	customerscanner_styles_styles_less : customerscanner_styles_styles_less,
	customerscanner_styles_styles_light_css : customerscanner_styles_styles_light_css,
	customerscanner_styles_styles_light_json : customerscanner_styles_styles_light_json,
	customerscanner_styles_styles_light_nss : customerscanner_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Application/AppUpdateFailure.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Application/AppUpdateFailure.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/CustomerScanner/Actions/Application/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Application/AppUpdateSuccess.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Application/AppUpdateSuccess.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/CustomerScanner/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/CustomerScanner/Actions/Application/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Application/ClientIsMultiUserMode.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Application/ClientIsMultiUserMode.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
  return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Application/GetClientSupportVersions.js":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Application/GetClientSupportVersions.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  let versionStr = '';
  Object.keys(versionInfo).forEach(function (key, index) {
    // key: the name of the object key
    // index: the ordinal position of the key within the object
    //console.log(`Key: ${key}   Index: ${index}`);
    if (key != 'Application Version') {
      versionStr += `${key}: ${versionInfo[key]}\n`;
    }
  });
  return versionStr;
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Application/GetClientVersion.js":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Application/GetClientVersion.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
  let versionInfo = clientAPI.getVersionInfo();
  if (versionInfo.hasOwnProperty('Application Version')) {
    return versionInfo['Application Version'];
  }
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Application/OnWillUpdate.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Application/OnWillUpdate.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/CustomerScanner/Actions/Application/OnWillUpdate.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/CustomerScanner/Actions/CustomerScanner/Service/CloseOffline.action').then(success => Promise.resolve(success), failure => Promise.reject('Offline Odata Close Failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Application/ResetAppSettingsAndLogout.js":
/*!******************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
  let logger = clientAPI.getLogger();
  let platform = clientAPI.nativescript.platformModule;
  let appSettings = clientAPI.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return clientAPI.getPageProxy().executeAction('/CustomerScanner/Actions/Application/Reset.action');
  }
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/ClientData.js":
/*!***************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/ClientData.js ***!
  \***************************************************************/
/***/ (() => {

// export default {
//     UserRole: ''
// };

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteConfirmation.js":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteConfirmation.js ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/CustomerScanner/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/CustomerScanner/ErrorArchive_CheckForSyncError.js":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/CustomerScanner/ErrorArchive_CheckForSyncError.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CheckForSyncError)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} context
 */
function CheckForSyncError(context) {
  context.count('/CustomerScanner/Services/CustomerScanner.service', 'ErrorArchive', '').then(errorCount => {
    if (errorCount > 0) {
      return context.getPageProxy().executeAction('/CustomerScanner/Actions/ErrorArchive/ErrorArchive_SyncFailure.action').then(function () {
        return Promise.reject(false);
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/GetUserRole.js":
/*!****************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/GetUserRole.js ***!
  \****************************************************************/
/***/ (() => {

// import ClientData from './ClientData'; // Import the ClientData.js file

// export default function GetUserRole(context) {
//     var userRoles = context.getClientData().UserRoles;

//     if (!userRoles) {
//         userRoles = context.getODataProvider('/CustomerScanner/Services/CustomerScanner.service').getUserRoles();
//         context.getClientData().UserRoles = userRoles;
//     }

//     if (userRoles.includes('Admin')) {
//         ClientData.UserRole = 'Admin';
//         return 'Admin';
//     } else if (userRoles.includes('user')) {
//         ClientData.UserRole = 'user';
//         return 'user';
//     } else {
//         ClientData.UserRole = 'Guest';
//         return 'Guest';
//     }
// }

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Logging/LogLevels.js":
/*!**********************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Logging/LogLevels.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
  var levels = [];
  levels.push({
    'DisplayValue': 'Error',
    'ReturnValue': 'Error'
  });
  levels.push({
    'DisplayValue': 'Warning',
    'ReturnValue': 'Warn'
  });
  levels.push({
    'DisplayValue': 'Info',
    'ReturnValue': 'Info'
  });
  levels.push({
    'DisplayValue': 'Debug',
    'ReturnValue': 'Debug'
  });
  levels.push({
    'DisplayValue': 'Trace',
    'ReturnValue': 'Trace'
  });
  return levels;
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Logging/SetTraceCategories.js":
/*!*******************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Logging/SetTraceCategories.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
  var logger = clientAPI.getLogger();
  const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
  const fcsection = sectionedTable.getSection('FormCellSection0');
  const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
  const odataTrace = fcsection.getControl('odataTrace');
  try {
    if (traceCategory.getValue()) {
      var values = traceCategory.getValue();
      var categories = [];
      if (values && values.length) {
        categories = values.map(value => {
          return 'mdk.trace.' + value.ReturnValue;
        });
      }
      clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Logging/SetUserLogLevel.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Logging/SetUserLogLevel.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
  try {
    if (clientAPI.getValue() && clientAPI.getValue()[0]) {
      var logger = clientAPI.getLogger();
      var listPickerValue = clientAPI.getValue()[0].ReturnValue;
      if (listPickerValue) {
        switch (listPickerValue) {
          case 'Debug':
            logger.setLevel('Debug');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Error':
            logger.setLevel('Error');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Warn':
            logger.setLevel('Warn');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Info':
            logger.setLevel('Info');
            ShowTraceOptions(clientAPI, false);
            break;
          case 'Trace':
            logger.setLevel('Trace');
            ShowTraceOptions(clientAPI, true);
            break;
          default:
            // eslint-disable-next-line no-console
            console.log(`unrecognized key ${listPickerValue}`);
        }
        return listPickerValue;
      }
    }
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}
function ShowTraceOptions(clientAPI, tracingEnabled) {
  let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
  let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');
  categories.setVisible(tracingEnabled);
  odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Logging/ToggleLogging.js":
/*!**************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Logging/ToggleLogging.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    let switchValue = enableLogSwitch.getValue();
    if (switchValue) {
      logger.on();
      logLevelListPicker.setVisible(true);
      logLevelListPicker.setEditable(true);
      logLevelListPicker.redraw();
    } else {
      logger.off();
      logLevelListPicker.setEditable(false);
      logLevelListPicker.setVisible(false);
      logLevelListPicker.redraw();
    }
    return switchValue;
  } catch (exception) {
    logger.log(String(exception), 'Error');
    return undefined;
  }
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Logging/TraceCategories.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Logging/TraceCategories.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
  var categories = ['action', 'api', 'app', 'binding', 'branding', 'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push', 'restservice', 'settings', 'targetpath', 'ui'];
  var values = [];
  categories.forEach(category => {
    values.push({
      'DisplayValue': category,
      'ReturnValue': category
    });
  });
  return values;
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Logging/UserLogSetting.js":
/*!***************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Logging/UserLogSetting.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {
  try {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
    const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    //Persist the user logging preferences
    if (logger) {
      console.log("in logger state");
      if (logger.isTurnedOn()) {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(true);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(true);
        }
      } else {
        if (enableLogSwitch) {
          enableLogSwitch.setValue(false);
        }
        if (logLevelListPicker) {
          logLevelListPicker.setEditable(false);
        }
      }
      var logLevel = logger.getLevel();
      if (logLevel) {
        if (logLevelListPicker) {
          logLevelListPicker.setValue([logLevel]);
        }
      }
      if (logLevel === 'Trace') {
        traceCategory.setVisible(true);
        odataTrace.setVisible(true);
      }

      //Upon selecting a value in the List picker and clicking the back button 
      //will enable the onload page rule. This will set the selected value
      //in the control
      if (logLevelListPicker.getValue()[0]) {
        var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
        if (returnValue) {
          logLevelListPicker.setValue([returnValue]);
          logger.setLevel(returnValue);
        }
      }
    }
  } catch (exception) {
    // eslint-disable-next-line no-console
    console.log(String(exception), 'Error User Logger could not be set');
  }
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/NavigateToCustomerDetail.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/NavigateToCustomerDetail.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigateToCustomerDetail)
/* harmony export */ });
function NavigateToCustomerDetail(context) {
  let pageProxy = context.getPageProxy();
  const scannedResult = context.getActionResult('BarcodeResult')?.data;
  console.log("Scanned Result: ", scannedResult);
  if (!scannedResult) {
    return context.executeAction({
      "Name": "/CustomerScanner/Actions/ShowMessage_NoScan.action",
      "Properties": {
        "Message": "No barcode scanned."
      }
    });
  }
  return context.read('/CustomerScanner/Services/CustomerScanner.service', 'CustomerDataSet', [], `$filter=CustomerId eq '${scannedResult}'`).then(result => {
    if (result && result.length > 0) {
      context.setActionBinding(result.getItem(0));
      return context.executeAction('/CustomerScanner/Actions/NavigateToDetail.action');
    } else {
      return context.executeAction('/CustomerScanner/Actions/ShowMessage_NotFound.action');
    }
  }).catch(error => {
    console.log('OData Read Error:', error);
    return context.executeAction({
      "Name": "/CustomerScanner/Actions/GenericErrorMessage.action",
      "Properties": {
        "Message": "Something went wrong while fetching customer data."
      }
    });
  });
}

// export default function BarcodeResult_OpenProductDetail(context) {
//     let pageProxy = context.getPageProxy();
//     var message = '';
//     var actionResult = context.getActionResult('BarcodeScanner');
//     var scannedResult = actionResult.data;
//     console.log("Scanned Result: ", scannedResult);

//     return context.read('/Customer_Scanner/Services/Customer_Scanner.service', 'CustomerDataSet', [], `$filter=CustomerId eq ${scannedResult}`).then((results) => {
//         if (results && results.length > 0) {
//             let prod = results.getItem(0);
//             pageProxy.setActionBinding(prod);
//             return pageProxy.executeAction('/Customer_Scanner/Actions/NavigateToDetail.action');
//         } else {
//             message = `Customer with ID (${scannedResult}) not found`;
//             return context.executeAction({
//                 "Name": "/Customer_Scanner/Actions/ShowMessage_NoScan.action",
//                 "Properties": {
//                     "Message": "No barcode scanned"
//                 }
//             });
//         }
//     });
// }

/***/ }),

/***/ "./build.definitions/CustomerScanner/Rules/Service/Initialize.js":
/*!***********************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Rules/Service/Initialize.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Initialize)
/* harmony export */ });
// import GetUserRole from './GetUserRole';
// export default function StartupRoleCheck(context) {

//     return GetUserRole(context);

// }
function Initialize(context) {
  // Perform pre data initialization task

  // Initialize all your Data sources
  let _CustomerScanner = context.executeAction('/CustomerScanner/Actions/CustomerScanner/Service/InitializeOffline.action');

  //You can add more service initialize actions here

  return Promise.all([_CustomerScanner]).then(() => {
    // After Initializing the DB connections

    // Display successful initialization  message to the user
    return context.executeAction({
      "Name": "/CustomerScanner/Actions/GenericToastMessage.action",
      "Properties": {
        "Message": "Application Services Initialized",
        "Animated": true,
        "Duration": 1,
        "IsIconHidden": true,
        "NumberOfLines": 1
      }
    });
  }).catch(() => {
    return false;
  });
}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Styles/Styles.css":
/*!*************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Styles/Styles.css ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
`, "",{"version":3,"sources":["webpack://./build.definitions/CustomerScanner/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/CustomerScanner/Styles/Styles.less":
/*!**************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Styles/Styles.less ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/`, "",{"version":3,"sources":["webpack://./build.definitions/CustomerScanner/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/CustomerScanner/Styles/Styles.light.css":
/*!*******************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Styles/Styles.light.css ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/CustomerScanner/Styles/Styles.light.nss":
/*!*******************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Styles/Styles.light.nss ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/Application/About.page":
/*!************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/Application/About.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/CustomerScanner/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"/CustomerScanner/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/CustomerScanner/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)","_Type":"KeyValue.Type.Item"},{"Value":"/CustomerScanner/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/CustomerScanner/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"About","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/Application/Support.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/Application/Support.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/CustomerScanner/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/CustomerScanner/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/CustomerScanner/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/CustomerScanner/Actions/Application/NavToActivityLog.action","_Type":"SimplePropertyCollection.Type.Cell"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/CustomerScanner/Actions/CloseModalPage_Complete.action","_Type":"Control.Type.ActionBarItem"}],"_Name":"ActionBar1","Caption":"Settings","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/Application/UserActivityLog.page":
/*!**********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/Application/UserActivityLog.page ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/CustomerScanner/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/CustomerScanner/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/CustomerScanner/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/CustomerScanner/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/CustomerScanner/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/CustomerScanner/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/CustomerScanner/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","ActionBar":{"Caption":"Activity Log","PrefersLargeCaption":false,"_Type":"Control.Type.ActionBar"},"OnLoaded":"/CustomerScanner/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Create.page":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Create.page ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/CustomerScanner/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_CreateEntity.action","Position":"Right","SystemItem":"Save","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Create_CustomerData_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"CustomerId","_Name":"CustomerId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetName","_Name":"StreetName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetpreName","_Name":"StreetpreName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetsufName","_Name":"StreetsufName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Cityname","_Name":"Cityname","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"District","_Name":"District","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Postalcode","_Name":"Postalcode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Region","_Name":"Region","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Countycode","_Name":"Countycode","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BankName","_Name":"BankName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountNumber","_Name":"AccountNumber","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Ifsc","_Name":"Ifsc","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Branch","_Name":"Branch","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Localcurrency","_Name":"Localcurrency","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Iban","_Name":"Iban","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InternationalCurr","_Name":"InternationalCurr","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"IbanvalidtyDate","Caption":"IbanvalidtyDate","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"BusinessPart","_Name":"BusinessPart","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"IndustrySector","_Name":"IndustrySector","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bpcreatoremailid","_Name":"Bpcreatoremailid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bpemail","_Name":"Bpemail","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Contactno","_Name":"Contactno","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Aadharno","_Name":"Aadharno","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bppan","_Name":"Bppan","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gst","_Name":"Gst","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Approverremailid","_Name":"Approverremailid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sendforapprovalflag","_Name":"Sendforapprovalflag","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bpapproved","_Name":"Bpapproved","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bprejected","_Name":"Bprejected","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Remarkofrejection","_Name":"Remarkofrejection","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Inactiveflag","_Name":"Inactiveflag","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"CustomerDataSet_Create"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Detail.page":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Detail.page ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/CustomerScanner/Services/CustomerScanner.service","EntitySet":"CustomerDataSet","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Edit.action","Position":"Right","SystemItem":"Edit","_Type":"Control.Type.ActionBarItem"},{"OnPress":"/CustomerScanner/Rules/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,CustomerData_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{StreetName}","Subhead":"{CustomerId}","BodyText":"","Footnote":"{StreetsufName}","Description":"{StreetpreName}","StatusText":"{Cityname}","StatusImage":"","SubstatusImage":"","SubstatusText":"{District}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"CustomerId","Value":"{CustomerId}","_Type":"KeyValue.Type.Item"},{"KeyName":"StreetName","Value":"{StreetName}","_Type":"KeyValue.Type.Item"},{"KeyName":"StreetpreName","Value":"{StreetpreName}","_Type":"KeyValue.Type.Item"},{"KeyName":"StreetsufName","Value":"{StreetsufName}","_Type":"KeyValue.Type.Item"},{"KeyName":"Cityname","Value":"{Cityname}","_Type":"KeyValue.Type.Item"},{"KeyName":"District","Value":"{District}","_Type":"KeyValue.Type.Item"},{"KeyName":"Postalcode","Value":"{Postalcode}","_Type":"KeyValue.Type.Item"},{"KeyName":"Region","Value":"{Region}","_Type":"KeyValue.Type.Item"},{"KeyName":"Countycode","Value":"{Countycode}","_Type":"KeyValue.Type.Item"},{"KeyName":"BankName","Value":"{BankName}","_Type":"KeyValue.Type.Item"},{"KeyName":"AccountNumber","Value":"{AccountNumber}","_Type":"KeyValue.Type.Item"},{"KeyName":"Ifsc","Value":"{Ifsc}","_Type":"KeyValue.Type.Item"},{"KeyName":"Branch","Value":"{Branch}","_Type":"KeyValue.Type.Item"},{"KeyName":"Localcurrency","Value":"{Localcurrency}","_Type":"KeyValue.Type.Item"},{"KeyName":"Iban","Value":"{Iban}","_Type":"KeyValue.Type.Item"},{"KeyName":"InternationalCurr","Value":"{InternationalCurr}","_Type":"KeyValue.Type.Item"},{"KeyName":"IbanvalidtyDate","Value":"{IbanvalidtyDate}","_Type":"KeyValue.Type.Item"},{"KeyName":"BusinessPart","Value":"{BusinessPart}","_Type":"KeyValue.Type.Item"},{"KeyName":"IndustrySector","Value":"{IndustrySector}","_Type":"KeyValue.Type.Item"},{"KeyName":"Bpcreatoremailid","Value":"{Bpcreatoremailid}","_Type":"KeyValue.Type.Item"},{"KeyName":"Bpemail","Value":"{Bpemail}","_Type":"KeyValue.Type.Item"},{"KeyName":"Contactno","Value":"{Contactno}","_Type":"KeyValue.Type.Item"},{"KeyName":"Aadharno","Value":"{Aadharno}","_Type":"KeyValue.Type.Item"},{"KeyName":"Bppan","Value":"{Bppan}","_Type":"KeyValue.Type.Item"},{"KeyName":"Gst","Value":"{Gst}","_Type":"KeyValue.Type.Item"},{"KeyName":"Approverremailid","Value":"{Approverremailid}","_Type":"KeyValue.Type.Item"},{"KeyName":"Sendforapprovalflag","Value":"{Sendforapprovalflag}","_Type":"KeyValue.Type.Item"},{"KeyName":"Bpapproved","Value":"{Bpapproved}","_Type":"KeyValue.Type.Item"},{"KeyName":"Bprejected","Value":"{Bprejected}","_Type":"KeyValue.Type.Item"},{"KeyName":"Remarkofrejection","Value":"{Remarkofrejection}","_Type":"KeyValue.Type.Item"},{"KeyName":"Inactiveflag","Value":"{Inactiveflag}","_Type":"KeyValue.Type.Item"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"CustomerDataSet_Detail"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Edit.page":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Edit.page ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/CustomerScanner/Services/CustomerScanner.service","EntitySet":"CustomerDataSet","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/CustomerScanner/Actions/CloseModalPage_Cancel.action","_Type":"Control.Type.ActionBarItem"},{"Position":"Right","SystemItem":"Save","OnPress":"/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_UpdateEntity.action","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,Update_CustomerData_Detail)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"CustomerId","_Name":"CustomerId","Value":"{CustomerId}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"StreetName","_Name":"StreetName","Value":"{StreetName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetpreName","_Name":"StreetpreName","Value":"{StreetpreName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"StreetsufName","_Name":"StreetsufName","Value":"{StreetsufName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Cityname","_Name":"Cityname","Value":"{Cityname}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"District","_Name":"District","Value":"{District}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Postalcode","_Name":"Postalcode","Value":"{Postalcode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Region","_Name":"Region","Value":"{Region}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Countycode","_Name":"Countycode","Value":"{Countycode}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"BankName","_Name":"BankName","Value":"{BankName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountNumber","_Name":"AccountNumber","Value":"{AccountNumber}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Ifsc","_Name":"Ifsc","Value":"{Ifsc}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Branch","_Name":"Branch","Value":"{Branch}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Localcurrency","_Name":"Localcurrency","Value":"{Localcurrency}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Iban","_Name":"Iban","Value":"{Iban}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"InternationalCurr","_Name":"InternationalCurr","Value":"{InternationalCurr}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Mode":"Datetime","_Name":"IbanvalidtyDate","Value":"{IbanvalidtyDate}","Caption":"IbanvalidtyDate","_Type":"Control.Type.FormCell.DatePicker"},{"Caption":"BusinessPart","_Name":"BusinessPart","Value":"{BusinessPart}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"IndustrySector","_Name":"IndustrySector","Value":"{IndustrySector}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bpcreatoremailid","_Name":"Bpcreatoremailid","Value":"{Bpcreatoremailid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bpemail","_Name":"Bpemail","Value":"{Bpemail}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Contactno","_Name":"Contactno","Value":"{Contactno}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Aadharno","_Name":"Aadharno","Value":"{Aadharno}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bppan","_Name":"Bppan","Value":"{Bppan}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Gst","_Name":"Gst","Value":"{Gst}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Approverremailid","_Name":"Approverremailid","Value":"{Approverremailid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Sendforapprovalflag","_Name":"Sendforapprovalflag","Value":"{Sendforapprovalflag}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bpapproved","_Name":"Bpapproved","Value":"{Bpapproved}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Bprejected","_Name":"Bprejected","Value":"{Bprejected}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Remarkofrejection","_Name":"Remarkofrejection","Value":"{Remarkofrejection}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Inactiveflag","_Name":"Inactiveflag","Value":"{Inactiveflag}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"CustomerDataSet_Edit"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_List.page":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_List.page ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Create.action","Position":"Right","SystemItem":"Add","_Type":"Control.Type.ActionBarItem"}],"Caption":"$(L,CustomerDataSet)","_Type":"Control.Type.ActionBar"},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false,"_Type":"SectionCommon.Type.Header"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{StreetpreName}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Detail.action","StatusImage":"","Title":"{StreetName}","Footnote":"{StreetsufName}","PreserveIconStackSpacing":false,"StatusText":"{Cityname}","Subhead":"{CustomerId}","SubstatusText":"{District}","_Type":"ObjectTable.Type.ObjectCell"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"CustomerDataSet","Service":"/CustomerScanner/Services/CustomerScanner.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"CustomerDataSet_List"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/ErrorArchive/ErrorArchive_Detail.page":
/*!***************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/ErrorArchive/ErrorArchive_Detail.page ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"KeyAndValues":[{"Value":"{Message}","_Name":"KeyValue0","KeyName":"Error","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestBody}","_Name":"KeyValue1","KeyName":"Request Body","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestURL}","_Name":"KeyValue2","KeyName":"Request URL","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{HTTPStatusCode}","_Name":"KeyValue3","KeyName":"HTTP Status Code","Visible":true,"_Type":"KeyValue.Type.Item"},{"Value":"{RequestMethod}","_Name":"KeyValue4","KeyName":"Request Method","Visible":true,"_Type":"KeyValue.Type.Item"}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"ErrorArchive_Detail","ActionBar":{"Caption":"Details","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/ErrorArchive/ErrorArchive_List.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/ErrorArchive/ErrorArchive_List.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectTable","Target":{"Service":"/CustomerScanner/Services/CustomerScanner.service","EntitySet":"ErrorArchive"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"FooterVisible":false,"Caption":"No record found!"},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"_Type":"ObjectCell.Type.ContextMenu"},"Title":"{HTTPStatusCode}","Subhead":"{RequestURL}","Footnote":"{Message}","StatusText":"{RequestMethod}","AvatarStack":{"ImageIsCircular":false},"PreserveIconStackSpacing":false,"AccessoryType":"None","OnPress":"/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_Detail.action","Selected":false,"_Type":"ObjectTable.Type.ObjectCell"},"DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"HighlightSelectedItem":false,"Selection":{"ExitOnLastDeselect":true,"LongPressToEnable":"None","Mode":"None"}}]}],"_Type":"Page","_Name":"ErrorArchive_List","ActionBar":{"Caption":"Error List","PrefersLargeCaption":true,"_Type":"Control.Type.ActionBar"}}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Pages/Main.page":
/*!***********************************************************!*\
  !*** ./build.definitions/CustomerScanner/Pages/Main.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable","FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"Sections":[{"_Name":"DashboardSection","_Type":"Section.Type.ObjectHeader","ObjectHeader":{"_Type":"Control.Type.ObjectHeader","HeadlineText":"Dashboard","SubheadlineText":"Quick Stats","BodyText":"Overview of customer scanning","StatusText":"Live","FootnoteText":"Data updates every scan","DetailImageIsCircular":true,"DetailImage":"sap-icon://activity-individual","Tags":[{"Text":"Scanned Today: 23"},{"Text":"Total Customers: 582"},{"Text":"Pending Sync: 4"}]}},{"Header":{"_Name":"SectionHeader_CustomerScanner","AccessoryType":"None","UseTopPadding":true,"Caption":"📷 Scan Customer","BackgroundColor":"#F5F5F5","_Type":"SectionCommon.Type.Header"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Controls":[{"_Type":"Control.Type.Text","Text":"Click below to scan a customer QR or barcode.","Style":"Caption","TextAlignment":"Center"}],"Buttons":[{"_Type":"ButtonTable.Type.Button","Title":"View Customer DataSet","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://database","ImagePosition":"Leading","Spacing":"Medium","OnPress":"/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_List.action"},{"_Type":"ButtonTable.Type.Button","_Name":"ScanButton","Title":"Scan Customer","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://camera","ImagePosition":"Leading","FullWidth":true,"Visible":true,"Enabled":true,"Spacing":"Medium","OnPress":"/CustomerScanner/Actions/CustomerScanner/ScanCustomer.action","SemanticColor":"Positive"}],"_Name":"SectionButtonTable_CustomerScanner","_Type":"Section.Type.ButtonTable"}]}],"_Name":"Main","_Type":"Page","ActionBar":{"_Name":"ActionBar1","_Type":"Control.Type.ActionBar","Caption":"Main","PrefersLargeCaption":true,"Items":[{"_Name":"ActionBarItem0","_Type":"Control.Type.ActionBarItem","Caption":"User Menu","Icon":"sap-icon://employee","Position":"Right","IsIconCircular":true,"Visible":true,"OnPress":"/CustomerScanner/Actions/Application/UserMenuPopover.action"}]},"OnPress":{"/CustomerScanner/Actions/CustomerScanner/ScanCustomer.action":{"SuccessMessage":"Customer scanned successfully!","ErrorMessage":"Scanning failed. Please try again."}},"Responsive":{"Small":{"Visibility":"Visible","FullWidth":true},"Large":{"Visibility":"Visible","FullWidth":false}}}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"CustomerScanner","Version":"/CustomerScanner/Globals/Application/AppDefinition_Version.global","MainPage":"/CustomerScanner/Pages/Main.page","OnLaunch":"/CustomerScanner/Rules/Service/Initialize.js","OnWillUpdate":"/CustomerScanner/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/CustomerScanner/Rules/Service/Initialize.js","Styles":"/CustomerScanner/Styles/Styles.css","Localization":"/CustomerScanner/i18n/i18n.properties","_SchemaVersion":"24.11","StyleSheets":{"Styles":{"css":"/CustomerScanner/Styles/Styles.light.css","ios":"/CustomerScanner/Styles/Styles.light.nss","android":"/CustomerScanner/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/CustomerScanner/Styles/Styles.light.nss","android":"/CustomerScanner/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/AppUpdate.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/AppUpdate.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/CustomerScanner/Rules/Application/AppUpdateFailure.js","OnSuccess":"/CustomerScanner/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/AppUpdateFailureMessage.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/AppUpdateFailureMessage.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/AppUpdateProgressBanner.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/AppUpdateProgressBanner.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/CustomerScanner/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/AppUpdateSuccessMessage.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/AppUpdateSuccessMessage.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/Logout.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/Logout.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/NavToAbout.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/NavToAbout.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/CustomerScanner/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/NavToActivityLog.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/NavToActivityLog.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/CustomerScanner/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/NavToSupport.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/NavToSupport.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/CustomerScanner/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/OnWillUpdate.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/OnWillUpdate.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/Reset.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/Reset.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/ResetMessage.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/ResetMessage.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/CustomerScanner/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Application/UserMenuPopover.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Application/UserMenuPopover.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://synchronize","OnPress":"/CustomerScanner/Actions/CustomerScanner/Service/SyncStartedMessage.action","Title":"Sync Changes","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/CustomerScanner/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/CustomerScanner/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/CustomerScanner/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/CustomerScanner/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/CustomerScanner/Actions/Application/Logout.action","Title":"Logout","Visible":"/CustomerScanner/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CloseModalPage_Cancel.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CloseModalPage_Cancel.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CloseModalPage_Complete.action":
/*!**********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CloseModalPage_Complete.action ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/ClosePage.action":
/*!********************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/ClosePage.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CreateEntityFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CreateEntityFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CreateEntitySuccessMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CreateEntitySuccessMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/CustomerScanner/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_CreateEntity.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_CreateEntity.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/CustomerScanner/Actions/CreateEntityFailureMessage.action","OnSuccess":"/CustomerScanner/Actions/CreateEntitySuccessMessage.action","Properties":{"CustomerId":"#Control:CustomerId/#Value","StreetName":"#Control:StreetName/#Value","StreetpreName":"#Control:StreetpreName/#Value","StreetsufName":"#Control:StreetsufName/#Value","Cityname":"#Control:Cityname/#Value","District":"#Control:District/#Value","Postalcode":"#Control:Postalcode/#Value","Region":"#Control:Region/#Value","Countycode":"#Control:Countycode/#Value","BankName":"#Control:BankName/#Value","AccountNumber":"#Control:AccountNumber/#Value","Ifsc":"#Control:Ifsc/#Value","Branch":"#Control:Branch/#Value","Localcurrency":"#Control:Localcurrency/#Value","Iban":"#Control:Iban/#Value","InternationalCurr":"#Control:InternationalCurr/#Value","IbanvalidtyDate":"#Control:IbanvalidtyDate/#Value","BusinessPart":"#Control:BusinessPart/#Value","IndustrySector":"#Control:IndustrySector/#Value","Bpcreatoremailid":"#Control:Bpcreatoremailid/#Value","Bpemail":"#Control:Bpemail/#Value","Contactno":"#Control:Contactno/#Value","Aadharno":"#Control:Aadharno/#Value","Bppan":"#Control:Bppan/#Value","Gst":"#Control:Gst/#Value","Approverremailid":"#Control:Approverremailid/#Value","Sendforapprovalflag":"#Control:Sendforapprovalflag/#Value","Bpapproved":"#Control:Bpapproved/#Value","Bprejected":"#Control:Bprejected/#Value","Remarkofrejection":"#Control:Remarkofrejection/#Value","Inactiveflag":"#Control:Inactiveflag/#Value"},"Target":{"EntitySet":"CustomerDataSet","Service":"/CustomerScanner/Services/CustomerScanner.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteEntity.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_DeleteEntity.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"CustomerDataSet","Service":"/CustomerScanner/Services/CustomerScanner.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/CustomerScanner/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/CustomerScanner/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_UpdateEntity.action":
/*!***********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/CustomerDataSet_UpdateEntity.action ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"CustomerDataSet","Service":"/CustomerScanner/Services/CustomerScanner.service","ReadLink":"{@odata.readLink}"},"Properties":{"CustomerId":"#Control:CustomerId/#Value","StreetName":"#Control:StreetName/#Value","StreetpreName":"#Control:StreetpreName/#Value","StreetsufName":"#Control:StreetsufName/#Value","Cityname":"#Control:Cityname/#Value","District":"#Control:District/#Value","Postalcode":"#Control:Postalcode/#Value","Region":"#Control:Region/#Value","Countycode":"#Control:Countycode/#Value","BankName":"#Control:BankName/#Value","AccountNumber":"#Control:AccountNumber/#Value","Ifsc":"#Control:Ifsc/#Value","Branch":"#Control:Branch/#Value","Localcurrency":"#Control:Localcurrency/#Value","Iban":"#Control:Iban/#Value","InternationalCurr":"#Control:InternationalCurr/#Value","IbanvalidtyDate":"#Control:IbanvalidtyDate/#Value","BusinessPart":"#Control:BusinessPart/#Value","IndustrySector":"#Control:IndustrySector/#Value","Bpcreatoremailid":"#Control:Bpcreatoremailid/#Value","Bpemail":"#Control:Bpemail/#Value","Contactno":"#Control:Contactno/#Value","Aadharno":"#Control:Aadharno/#Value","Bppan":"#Control:Bppan/#Value","Gst":"#Control:Gst/#Value","Approverremailid":"#Control:Approverremailid/#Value","Sendforapprovalflag":"#Control:Sendforapprovalflag/#Value","Bpapproved":"#Control:Bpapproved/#Value","Bprejected":"#Control:Bprejected/#Value","Remarkofrejection":"#Control:Remarkofrejection/#Value","Inactiveflag":"#Control:Inactiveflag/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/CustomerScanner/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/CustomerScanner/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Create.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Create.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Detail.action":
/*!**********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Detail.action ***!
  \**********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Detail.page"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Edit.action":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_Edit.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_List.action":
/*!********************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/CustomerDataSet/NavToCustomerDataSet_List.action ***!
  \********************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_List.page"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/ScanCustomer.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/ScanCustomer.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OpenBarcodeScanner","ActionResult":{"_Name":"BarcodeResult"},"OnFailure":"/CustomerScanner/Actions/ShowMessage_NotFound.action","OnSuccess":"/CustomerScanner/Rules/NavigateToCustomerDetail.js"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOffline.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOffline.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Close","Service":"/CustomerScanner/Services/CustomerScanner.service","Force":true,"ActionResult":{"_Name":"close"},"OnSuccess":"/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineSuccessMessage.action","OnFailure":"/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineFailureMessage.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineFailureMessage.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failure closing data service - {#ActionResults:close/error}","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineSuccessMessage.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/CloseOfflineSuccessMessage.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Data service closed successfully","NumberOfLines":1,"Duration":3,"Animated":true,"IsIconHidden":true,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/DownloadOffline.action":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/DownloadOffline.action ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/CustomerScanner/Services/CustomerScanner.service","DefiningRequests":[{"Name":"CustomerDataSet","Query":"CustomerDataSet"}],"_Type":"Action.Type.OfflineOData.Download","ActionResult":{"_Name":"sync"},"OnFailure":"/CustomerScanner/Actions/CustomerScanner/Service/SyncFailureMessage.action","OnSuccess":"/CustomerScanner/Rules/CustomerScanner/ErrorArchive_CheckForSyncError.js"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/DownloadStartedMessage.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/DownloadStartedMessage.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Download in progress...","CompletionMessage":"Download Successful","CompletionTimeout":7,"OnSuccess":"/CustomerScanner/Actions/CustomerScanner/Service/DownloadOffline.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/InitializeOffline.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/InitializeOffline.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/CustomerScanner/Services/CustomerScanner.service","DefiningRequests":[{"Name":"CustomerDataSet","Query":"CustomerDataSet"}],"_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"ActivityIndicatorText":"Downloading...","ActionResult":{"_Name":"init"},"OnFailure":"/CustomerScanner/Actions/CustomerScanner/Service/InitializeOfflineFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/InitializeOfflineFailureMessage.action":
/*!******************************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/InitializeOfflineFailureMessage.action ***!
  \******************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/SyncFailureMessage.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/SyncFailureMessage.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Sync offline data service failure - {#ActionResults:sync/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/SyncStartedMessage.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/SyncStartedMessage.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Upload in progress...","CompletionMessage":"Sync completed","CompletionTimeout":7,"OnSuccess":"/CustomerScanner/Actions/CustomerScanner/Service/UploadOffline.action","OnFailure":"/CustomerScanner/Actions/CustomerScanner/Service/SyncFailureMessage.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/UploadOffline.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/CustomerScanner/Service/UploadOffline.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/CustomerScanner/Services/CustomerScanner.service","_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"sync"},"OnSuccess":"/CustomerScanner/Actions/CustomerScanner/Service/DownloadStartedMessage.action","OnFailure":"/CustomerScanner/Actions/CustomerScanner/Service/SyncFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/DeleteConfirmation.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/DeleteConfirmation.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/DeleteEntityFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/DeleteEntityFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/DeleteEntitySuccessMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/DeleteEntitySuccessMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/CustomerScanner/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/ErrorArchive/ErrorArchive_SyncFailure.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/ErrorArchive/ErrorArchive_SyncFailure.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","Message":"Upload failed!","Duration":0,"Animated":false,"OnActionLabelPress":"/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_List.action","ActionLabel":"View Errors"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_Detail.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_Detail.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/CustomerScanner/Pages/ErrorArchive/ErrorArchive_Detail.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_List.action":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/ErrorArchive/NavToErrorArchive_List.action ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/CustomerScanner/Pages/ErrorArchive/ErrorArchive_List.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/GenericBannerMessage.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/GenericBannerMessage.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/GenericMessageBox.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/GenericMessageBox.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/GenericNavigation.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/GenericNavigation.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/CustomerScanner/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/GenericToastMessage.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/GenericToastMessage.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Logging/LogUploadFailure.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Logging/LogUploadFailure.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Logging/LogUploadSuccessful.action":
/*!**************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Logging/LogUploadSuccessful.action ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Logging/UploadLog.action":
/*!****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Logging/UploadLog.action ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/CustomerScanner/Actions/Logging/LogUploadFailure.action","OnSuccess":"/CustomerScanner/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/Logging/UploadLogProgress.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/Logging/UploadLogProgress.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/CustomerScanner/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/NavigateToDetail.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/NavigateToDetail.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavigateToDetail"},"PageToOpen":"/CustomerScanner/Pages/CustomerScanner_CustomerDataSet/CustomerDataSet_Detail.page","EnablePageHeader":true}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/ShowMessage_NoScan.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/ShowMessage_NoScan.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","_Name":"ShowMessage_NoScan","Message":"No code was scanned. Please try again.","Title":"Scan Failed","IsModal":true,"OKCaption":"OK","MessageType":"Information"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/ShowMessage_NotFound.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/ShowMessage_NotFound.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","_Name":"ShowMessage_NotFound","Message":"No customer found with the scanned ID","Title":"No Match Found","IsModal":true,"OKCaption":"OK","MessageType":"Error"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/UpdateEntityFailureMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/UpdateEntityFailureMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Actions/UpdateEntitySuccessMessage.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Actions/UpdateEntitySuccessMessage.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/CustomerScanner/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Globals/Application/AppDefinition_Version.global":
/*!********************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Globals/Application/AppDefinition_Version.global ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Globals/Application/ApplicationName.global":
/*!**************************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Globals/Application/ApplicationName.global ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Globals/Application/SupportEmail.global":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Globals/Application/SupportEmail.global ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Globals/Application/SupportPhone.global":
/*!***********************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Globals/Application/SupportPhone.global ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/CustomerScanner/Services/CustomerScanner.service":
/*!****************************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Services/CustomerScanner.service ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"CustomerScanner","OfflineEnabled":true,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{"StoreParameters":{}},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "webpack/container/entry/bundle.js":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	".": () => {
		return Promise.resolve().then(() => (() => ((__webpack_require__(/*! ./build.definitions/application-index.js */ "./build.definitions/application-index.js")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ }),

/***/ "./build.definitions/CustomerScanner/Styles/Styles.light.json":
/*!********************************************************************!*\
  !*** ./build.definitions/CustomerScanner/Styles/Styles.light.json ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "./build.definitions/CustomerScanner/jsconfig.json":
/*!*********************************************************!*\
  !*** ./build.definitions/CustomerScanner/jsconfig.json ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"compilerOptions":{"module":"esnext","target":"es2019","moduleResolution":"node","lib":["esnext","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = undefined;
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/bundle.js");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map