require 'bundler'
Bundler.require()

ActiveRecord::Base.establish_connection(
  :adapter => "postgresql",
  :database => "carddb"
)

#Model
require './models/card'

#Routes

get '/' do
  erb :index
end

#get all cards - works
get '/api/card' do
  content_type :json
  cards = Card.all
  cards.to_json
end

#get specific card - works
get '/api/card/:id' do
  content_type :json
  cards = Card.find(params[:id].to_i)
  cards.to_json
end

#post - works
post '/api/card' do
  content_type :json
  card = Card.create(params[:card])
  card.to_json
end

#patch - works
patch '/api/card/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json
end

#patch - works
put '/api/card/:id' do
  content_type :json
  card = Card.find(params[:id].to_i)
  card.update(params[:card])
  card.to_json
end

#delete - works
delete '/api/card/:id' do
  content_type :json
  card = Card.delete(params[:id].to_i)
  card.to_json
end
