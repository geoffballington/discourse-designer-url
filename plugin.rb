# name: is-designer plugin
# about: Is the user a designer? epic
# version: 0.0.1
# authors: Geoff

after_initialize do
  require_dependency 'user'
  whitelist_staff_user_custom_field("user_field_2")
end