Rails.application.routes.draw do
  root  'meraki_code#home'
    get  'features'    => 'meraki_code#features'
    get  'blog'    => 'meraki_code#blog'
    get  'contact'    => 'meraki_code#contact'
end
