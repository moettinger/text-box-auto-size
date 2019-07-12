var Document = require('sketch/dom').Document
var Style = require('sketch/dom').Style
var Text = require('sketch/dom').Text
var UI = require('sketch/ui')
var Settings = require('sketch/settings')
var document = Document.getSelectedDocument();

function setSize() {
	run();
}

function onTextChanged() {
	var autoResize = Settings.settingForKey('auto-resize');
	if (autoResize) {
		run();
	}
}

function onHandlerLostFocus(e) {
	onTextChanged();
}

function toggleAutoResizing() {
	var autoResize = Settings.settingForKey('auto-resize');

	if (!autoResize) {
		Settings.setSettingForKey('auto-resize', true);
		UI.message('✅ Text box auto-size enabled ');
		run();
	} else {
		Settings.setSettingForKey('auto-resize', false);
		UI.message('❌ Text box auto-size disabled');
	}
}

function run() {
	var selectedLayers = document.selectedLayers;
	selectedLayers.forEach(function (layer) {
		sizeLayer(layer);
	});
}

function sizeLayer(textLayer) {
	//strip space at end of text
	var content = textLayer.sketchObject.stringValue();
	textLayer.sketchObject.setStringValue(content.replace(/^\s+|\s+$/g, '').trim());

	// set height of box
	var lineCount = textLayer.fragments.length;
	var lineHeight = textLayer.style.lineHeight;
	var baseHeight = (lineCount * lineHeight);
	textLayer.style.verticalAlignment = 'center';
	textLayer.sketchObject.frame().height = baseHeight;
}