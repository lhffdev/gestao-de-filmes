class String

  DATE_REGEX = /\A(\d{1,2}\/\d{1,2}\/\d{4})+\z/

  def integer?
    Integer(self) != nil
  rescue
    false
  end

  def date?
    (self =~ DATE_REGEX) != nil && Date.strptime(self, '%d/%m/%y') != nil
  rescue
    false
  end

end
