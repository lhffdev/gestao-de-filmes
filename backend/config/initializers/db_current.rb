def Time.db_current
  ApplicationRecord.db_datetime
end

def DateTime.db_current
  Time.db_current
end

def Date.db_current
  Time.db_current.to_date
end