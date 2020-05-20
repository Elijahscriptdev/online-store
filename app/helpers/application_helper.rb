module ApplicationHelper
    # def current_order
    #     if Order.find_by_id(session[:order_id]).nil?
    #         Order.new
    #     else
    #         Order.find_by_id(session[:order_id])
    #     end
    # end

    def current_order
        if !session[:order_id].nil?
            Order.find(session[:order_id])
        else
            Order.new
        end
    end
end
