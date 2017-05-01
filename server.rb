module Portfolio
  class Server < Sinatra::Base
    
    get "/" do
      erb :index
    end

    get "/project/1" do
      erb :fringely   
    end 

    get "/project/2" do
      erb :partylines   
    end

    get "/project/3" do
      erb :simon    
    end

    get "/project/4" do
      erb :midways    
    end

    get "/project/5" do
      erb :tqOriginal    
    end

    get "/project/6" do
      erb :raiseWage   
    end

    get "/project/7" do
      erb :bolthouse
    end

    get "/project/8" do
      erb :laughingcow
    end     

    get "/about"do
        erb :about
    end

  end
end