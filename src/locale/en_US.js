const en_US = {}

en_US.strings = {
  'choose_file'    : 'Choose a file',
  'you_have_chosen': 'You have chosen: %{file_name}',
  'or_drag_drop'   : 'or drag it here',
  'files_chosen'   : {
    0: '%{smart_count} file selected',
    1: '%{smart_count} files selected'
  }
}

en_US.pluralize = function (n) {
  if (n === 1) {
    return 0
  }
  return 1
}

if (typeof window.Uppy !== 'undefined') {
  window.Uppy.locale.en_US = en_US
}

export default en_US
